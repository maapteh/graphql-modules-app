import { GraphQLModule } from '@graphql-modules/core';

export interface ApolloClientContext {
    accesToken: string;
    res: any; // todo: express response
}

export const commonModule = new GraphQLModule<{}, {}, ApolloClientContext>({
    typeDefs: '',
    resolvers: {},
    context: (
        networkRequest: any,
        currentContext: object,
    ): ApolloClientContext => {
        console.log(networkRequest);

        // get user and put on main context
        return {
            accesToken: 'foo',
            res: networkRequest.res,
        };
    },
});
