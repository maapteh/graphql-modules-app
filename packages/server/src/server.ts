import express from 'express';
import { GraphQLModule } from '@graphql-modules/core';
import { ApolloServer } from 'apollo-server-express';

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

    const server = new ApolloServer({
        schema,
        context: session => session,
        introspection: true, // process.env.NODE_ENV === 'development',
        tracing: process.env.NODE_ENV === 'development', // tracing while in development
        playground: true, // ALERT: WE SHOW THE GRAPHQL PLAYGROUND ALSO IN PRODUCTION FOR THIS SAMPLE APP, REMOVE THIS LINE WHEN YOU ONLY WANT IT IN DEVELOPMENT,
        engine: {
            apiKey: process.env.ENGINE_KEY,
        },
        mocks: process.env.NODE_ENV === 'production' ? false : process.env.MOCK_API && process.env.MOCK_API === 'ON' ? MOCKS : false
    });

    const app = express();

    // ADD GZIP
    app.use(compression({ filter: shouldCompress }));
    app.use(NO_CACHE);

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
                process.env.MOCK_API && process.env.MOCK_API === "ON" ? "\n✨ Running Apollo server with mocks on" : "",
            );
        },
    );
}
