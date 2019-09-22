import express from 'express';
import { GraphQLModule } from '@graphql-modules/core';
import { ApolloServer } from 'apollo-server-express';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';

import { MOCKS } from '../test/schema-mock';
import { NO_CACHE } from './middleware/cache/no-cache';
import { ALLOWED_ORIGIN } from './middleware/allowed-origin/allowed-origins';
import { ORIGINS_LIST } from './middleware/allowed-origin/origins-list';

/**
 * COMPRESSION
 */
const compression = require('compression');
const shouldCompress = (req: express.Request, res: express.Response) => {
    if (req.headers['x-no-compression']) {
        return false;
    }

    return compression.filter(req, res);
};





/**
 * APOLLO SERVER
 */
export async function bootstrap(appModule: GraphQLModule) {
    const { schema } = appModule;

    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
    const path = '/graphql';

    // show all development tools on production too (for demonstration effect)
    const isProduction = false; // (process.env.NODE_ENV === 'production'

    const server = new ApolloServer({
        schema,
        context: session => ({ session }),
        introspection: !isProduction,
        tracing: !isProduction,
        playground: !isProduction,
        engine: {
            apiKey: process.env.ENGINE_KEY,
        },
        mocks: process.env.NODE_ENV === 'production' ? false : process.env.MOCK_API && process.env.MOCK_API === 'on' ? MOCKS : false,
        formatError: (err) => {

            // on production remove stacktrace
            if (isProduction) {
                // first sent it to own metrics

                // now save to delete it for our clients
                delete err.stack
            }

            return err;
        },
        debug: !isProduction,
    });

    const app = express();

    // ADD GZIP
    app.use(compression({ filter: shouldCompress }));
    app.use(NO_CACHE);

    // Add interactive graph in development mode
    if (!isProduction) {
        app.use('/voyager', voyagerMiddleware({ endpointUrl: path }));
    }

    // FIXME: Apollo doesn't set allow-origin correctly ('*' instead of real allowed origin)
    console.log(`allowed origins:\n${ORIGINS_LIST.join('\n')}`);
    app.use(ALLOWED_ORIGIN);

    server.applyMiddleware({
        app,
        path,
        cors: {
            credentials: true,
            origin: ORIGINS_LIST,
        },
    });

    app.listen(
        {
            port,
        },
        () => {
            console.log(
                `🚀 APOLLO GRAPHQL at http://localhost:${port}${server.graphqlPath}`,
                process.env.MOCK_API && process.env.MOCK_API === "on" ? "\n✨ Running Apollo server with mocks on" : "",
            );
        },
    );
}
