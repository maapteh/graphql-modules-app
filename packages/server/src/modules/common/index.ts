import { GraphQLModule } from '@graphql-modules/core';

export interface ApolloClientContext {
    accesToken: string;
    res: any; // todo: express response
}

export const commonModule = new GraphQLModule({
    typeDefs: '',
    resolvers: {},
    context: (
        networkRequest: any,
        currentContext: object,
    ): ApolloClientContext => {
        // get user and put on main context
        return {
            accesToken: 'foo',
            res: networkRequest.res,
        };
    },
});
