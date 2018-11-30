import { GraphQLModule } from '@graphql-modules/core';
import { ApolloEngine } from 'apollo-engine';
import { ApolloServer } from 'apollo-server-express';

import * as express from 'express';
import * as depthLimit from 'graphql-depth-limit';

export async function bootstrap(appModule: GraphQLModule) {
    const { schema, context } = appModule;

    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
    const path = '/graphql';

    const server = new ApolloServer({
        schema,
        context,
        introspection: true,
        tracing: true,
        cacheControl: true,
        // By setting this to "false", we avoid using Apollo Server 2's
        // integrated metric reporting and fall-back to using the Apollo
        // Engine Proxy (running separately) for metric collection.
        engine: false,
        // TODO: find best strategy for limiting usage
        validationRules: [depthLimit(11)],
    });

    const app = express();

    server.applyMiddleware({
        app,
        path,
        cors: { 
            origin: [
                'http://localhost:4001',
                'http://yourapp.com'
            ]
        }
    });

    const engine = new ApolloEngine({
        apiKey: 'service:maapteh-1363:j8BX9AMfVDWeFIUj44i1fw',
        logging: {
            level: 'DEBUG',
        },
        origins: [
            {
                requestTimeout: '20s',
                supportsBatch: true,
            },
        ],
        // See: https://www.apollographql.com/docs/engine/proxy/guides.html#resolver-hints
        stores: [
            {
                name: 'inMemory',
                memcache: {
                    // url: ['localhost:4567'],
                },
                inMemory: {
                    cacheSize: 104857600, // 100 MB; defaults to 50MB.
                },
            },
        ],
        queryCache: {
            publicFullQueryStore: 'inMemory',
        },
    });

    engine.listen(
        {
            port,
            expressApp: app,
            graphqlPaths: [path],
        },
        () => {
            console.log(
                `🚀 Server ready at http://localhost:${port}${
                    server.graphqlPath
                }`,
            );
        },
    );
}
