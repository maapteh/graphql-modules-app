import { GraphQLModule } from '@graphql-modules/core';
import { ApolloEngine } from 'apollo-engine';
import { ApolloServer } from 'apollo-server-express';
import * as express from 'express';
import * as depthLimit from 'graphql-depth-limit';

import { allowedOrigins } from './allowed-origins';

export async function bootstrapMetrics(appModule: GraphQLModule) {
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
        playground: true, // WE SHOW THE GRAPHQL PLAYGROUND ALSO IN PRODUCTION, REMOVE THIS LINE WHEN YOU ONLY WANT IT IN DEVELOPMENT
    });

    const app = express();

    // BUG: Apollo doesn't set allow-origin correctly ('*' instead of real allowed origin)
    app.use((req, res, next) => {
        const origin = req.get('origin');

        if (origin) {
            const index = allowedOrigins.indexOf(origin);
            if (index === -1) {
                const msg =
                    'The CORS policy does not allow access from the specified Origin.';
                return next(new Error(msg));
            }

            res.header('Access-Control-Allow-Credentials', 'true');
            res.header('Access-Control-Allow-Origin', allowedOrigins[index]);
        }

        next();
    });

    server.applyMiddleware({
        app,
        path,
        cors: {
            origin: allowedOrigins,
        },
    });

    const engine = new ApolloEngine({
        apiKey: process.env.ENGINE_KEY,
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
                // memcache: { url: ['localhost:4567'] },
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
                `🚀 APOLLO GRAPHQL at http://localhost:${port}${
                    server.graphqlPath
                }`,
            );
        },
    );
}
