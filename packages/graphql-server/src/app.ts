import { GraphQLModule } from '@graphql-modules/core';
// TODO: Sample with dummy data, no keys needed
import { contentModule } from './modules/content';
// When you have an OpenApi key from Bol.com
import { productModule } from './modules/product';
import { commonModule, ApolloClientContext } from './modules/common';

export const appModule = new GraphQLModule<{}, {}, ApolloClientContext>({
    /** a list of `GraphQLModule` you wish to load to your app */
    imports: [contentModule, productModule, commonModule],
});
