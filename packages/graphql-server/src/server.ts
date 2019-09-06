import express from 'express';
import * as depthLimit from 'graphql-depth-limit';
import { GraphQLModule } from '@graphql-modules/core';
import { ApolloServer } from 'apollo-server-express';

import { allowedOrigins } from './allowed-origins';

export async function bootstrap(appModule: GraphQLModule) {
    const { schema } = appModule;

    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
    const path = '/graphql';

    const server = new ApolloServer({
        schema,
        context: session => session,
        introspection: true,
        cacheControl: true,
        tracing: process.env.NODE_ENV === 'development', // tracing while in development
        playground: true, // ALERT: WE SHOW THE GRAPHQL PLAYGROUND ALSO IN PRODUCTION FOR THIS SAMPLE APP, REMOVE THIS LINE WHEN YOU ONLY WANT IT IN DEVELOPMENT,
        engine: {
            apiKey: process.env.ENGINE_KEY,
        },
        // TODO: find best strategy for limiting usage
        validationRules: [depthLimit(11)],
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
            credentials: true,
            origin: allowedOrigins,
        },
    });

    app.listen(
        {
            port,
        },
        () => {
            console.log(
                `🚀 APOLLO GRAPHQL at http://localhost:${port}${server.graphqlPath}`,
            );
        },
    );
}
