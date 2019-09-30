import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { ApolloLink, split } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { BatchHttpLink } from 'apollo-link-batch-http';

import { toIdValue } from 'apollo-utilities';
import { fragmentMatcher } from './fragment-matcher';
import { version } from '../../package.json';

const uri = process.env.GRAPHQL_ENDPOINT
    ? process.env.GRAPHQL_ENDPOINT
    : 'http://localhost:4000/graphql';

const cache = new InMemoryCache({
    fragmentMatcher,
    cacheRedirects: {
        Query: {
            // Here we map the data we get in product list view with the one for detail view
            // see: https://www.apollographql.com/docs/react/features/performance.html
            getProduct: (_, args) =>
                toIdValue(
                    cache.config.dataIdFromObject({
                        __typename: 'Product',
                        id: args.id,
                    }),
                ),
        },
    },
    resultCaching: false,
});

const batchHttpLink = new BatchHttpLink({
    uri,
    credentials: 'include', // 'same-origin'
    headers: { batch: 'true ' },
    batchInterval: 10,
    fetch,
});

// link to use if not batching
const httpLink = new HttpLink({
    uri,
    credentials: 'include', // 'same-origin'
    fetch,
});

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
    global.fetch = fetch;
}

let apollo = null;

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */
export function withApollo(PageComponent, { ssr = true } = {}) {
    const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
        const client = apolloClient || apollo || initApolloClient(apolloState);
        return (
            <ApolloProvider client={client}>
                <PageComponent {...pageProps} />
            </ApolloProvider>
        );
    };

    // Set the correct displayName in development
    if (process.env.NODE_ENV !== 'production') {
        const displayName =
            PageComponent.displayName || PageComponent.name || 'Component';

        if (displayName === 'App') {
            console.warn('This withApollo HOC only works with PageComponents.');
        }

        WithApollo.displayName = `withApollo(${displayName})`;
    }

    if (ssr || PageComponent.getInitialProps) {
        WithApollo.getInitialProps = async ctx => {
            const { AppTree } = ctx;

            // Initialize ApolloClient, add it to the ctx object so
            // we can use it in `PageComponent.getInitialProp`.
            apollo = ctx.apolloClient = initApolloClient();

            // Run wrapped getInitialProps methods
            let pageProps = {};
            if (PageComponent.getInitialProps) {
                pageProps = await PageComponent.getInitialProps(ctx);
            }

            // Only on the server:
            if (typeof window === 'undefined') {
                // When redirecting, the response is finished.
                // No point in continuing to render
                if (ctx.res && ctx.res.finished) {
                    return pageProps;
                }

                // Only if ssr is enabled
                if (ssr) {
                    try {
                        // Run all GraphQL queries
                        const { getDataFromTree } = await import(
                            '@apollo/react-ssr'
                        );
                        await getDataFromTree(
                            <AppTree
                                pageProps={{
                                    ...pageProps,
                                    apollo,
                                }}
                            />,
                        );
                    } catch (error) {
                        // Prevent Apollo Client GraphQL errors from crashing SSR.
                        // Handle them in components via the data.error prop:
                        // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                        console.error(
                            'Error while running `getDataFromTree`',
                            error,
                        );
                    }

                    // getDataFromTree does not call componentWillUnmount
                    // head side effect therefore need to be cleared manually
                    Head.rewind();
                }
            }

            // Extract query data from the Apollo store
            const apolloState = apollo.cache.extract();

            return {
                ...pageProps,
                apolloState,
            };
        };
    }

    return WithApollo;
}

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */
function initApolloClient(initialState) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (typeof window === 'undefined') {
        return createApolloClient(initialState);
    }

    // Reuse client on the client-side
    if (!apollo) {
        apollo = createApolloClient(initialState);
    }

    return apollo;
}

/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */
function createApolloClient(initialState = {}) {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined', // Disables forceFetch on the server (so queries are only run once)
        link: ApolloLink.from([
            onError(({ graphQLErrors, networkError }) => {
                if (graphQLErrors)
                    graphQLErrors.map(({ message, locations, path }) =>
                        console.log(
                            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                        ),
                    );
                if (networkError)
                    console.log(`[Network error]: ${networkError}`);
            }),

            split(
                operation => operation.getContext().important === true,
                httpLink, // if the test is true -- debatch
                batchHttpLink, // otherwise, batching is fine
            ),
        ]),
        cache: cache.restore(initialState),
        name: 'Sample application',
        version,
    });
}
