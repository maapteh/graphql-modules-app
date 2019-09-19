import { GraphQLModule } from '@graphql-modules/core';
// When you have an OpenApi key from Bol.com
import { productModule } from './modules/product';
import { offerModule } from './modules/offer';
import { commonModule } from './modules/common';

export const appModule = new GraphQLModule({
    name: 'root',
    /** a list of `GraphQLModule` you wish to load to your app */
    imports: [productModule, offerModule, commonModule],
});
