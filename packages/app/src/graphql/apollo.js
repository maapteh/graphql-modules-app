import React, { useMemo } from 'react';
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

let apolloClient = null;

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
});

const batchHttpLink = new BatchHttpLink({
    uri,
    credentials: 'include', // 'same-origin'
    headers: { batch: 'true ' },
    batchInterval: 20
});

// link to use if not batching
const httpLink = new HttpLink({
    uri,
    credentials: 'include', // 'same-origin'
});

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
    global.fetch = fetch;
}

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
        const client = useMemo(
            () => apolloClient || initApolloClient(apolloState),
            [apolloClient, apolloState],
        );
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

    // Allow Next.js to remove getInitialProps from the browser build
    if (typeof window === 'undefined') {
        if (ssr) {
            WithApollo.getInitialProps = async ctx => {
                const { AppTree } = ctx;

                let pageProps = {};
                if (PageComponent.getInitialProps) {
                    pageProps = await PageComponent.getInitialProps(ctx);
                }

                // Run all GraphQL queries in the component tree
                // and extract the resulting data
                const apolloClient = initApolloClient();

                try {
                    // Run all GraphQL queries
                    const { getDataFromTree } = await import(
                        '@apollo/react-ssr'
                    );
                    await getDataFromTree(
                        <AppTree
                            pageProps={{
                                ...pageProps,
                                apolloClient,
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

                // Extract query data from the Apollo store
                const apolloState = apolloClient.cache.extract();

                return {
                    ...pageProps,
                    apolloState,
                };
            };
        }
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
    if (!apolloClient) {
        apolloClient = createApolloClient(initialState);
    }

    return apolloClient;
}

/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */
function createApolloClient(initialState = {}) {
    // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
    const isBrowser = typeof window !== 'undefined';
    return new ApolloClient({
        connectToDevTools: isBrowser,
        ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
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
        cache: cache.restore(initialState || {}),
        name: 'Sample application',
        version,
    });
}
