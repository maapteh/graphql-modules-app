import { GraphQLModule, ModuleContext } from '@graphql-modules/core';
// import {  } from '../../../_generated-types';
import { ApolloClientContext } from '../../../app';
import { ProductProvider } from '../providers/product';

export default ({ injector }: GraphQLModule) => ({
    Query: {
        getProducts: (
            _: any,
            { id }: any,
            context: ModuleContext<ApolloClientContext>,
        ) => {
            return injector
                .get<ProductProvider>(ProductProvider)
                .getProducts(id, context);
        },
    },
});
