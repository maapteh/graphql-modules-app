import fetch from 'isomorphic-unfetch';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, split } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { toIdValue } from 'apollo-utilities';

import { fragmentMatcher } from './fragment-matcher';

let apolloClient = null;

// for client its build as string with webpack, for server its set by CI
const uri = process.env.GRAPHQL_ENDPOINT
    ? process.env.GRAPHQL_ENDPOINT
    : 'http://localhost:4000/graphql';

// link to use if batching (default)
const batchHttpLink = new BatchHttpLink({ uri, headers: { batch: 'true ' } });
// link to use if not batching
const httpLink = new HttpLink({
    uri,
    credentials: 'include', //'same-origin'
});

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
    global.fetch = fetch;
}

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

function create(initialState) {
    // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
    return new ApolloClient({
        connectToDevTools: process.browser,
        ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
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
    });
}

export default function initApollo(initialState) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (!process.browser) {
        return create(initialState);
    }

    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = create(initialState);
    }

    return apolloClient;
}
