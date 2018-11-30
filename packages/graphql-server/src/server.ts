import { GraphQLModule } from '@graphql-modules/core';
import { ApolloServer } from 'apollo-server-express';
import * as express from 'express';

export async function bootstrap(appModule: GraphQLModule) {
    const { schema, context } = appModule;

    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
    const path = '/graphql';

    const server = new ApolloServer({
        schema,
        context,
        introspection: true,
        cacheControl: true,
        tracing: true,
    });

    const app = express();

    const allowedOrigins = [
        'http://localhost:4000',
        'http://localhost:4001',
        process.env.ALLOWED_ORIGIN,
    ];

    // BUG: Apollo doesn't set allow-origin correctly ('*' instead of real allowed origin)
    app.use((req, res, next) => {

        const origin = req.get('origin');

        if (origin) {
            const index = allowedOrigins.indexOf(origin);
            if (index === -1) {
                const msg = 'The CORS policy does not allow access from the specified Origin.';
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
            origin: allowedOrigins
        }
    });

    app.listen(
        {
            port,
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
