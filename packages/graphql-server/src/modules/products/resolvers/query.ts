import { ModuleContext } from '@graphql-modules/core';
// import {  } from '../../../_generated-types';
import { ApolloClientContext } from '../../../app';
import { ProductsProvider } from '../providers/products';

export default {
    Query: {
        getProducts: (
            _: any,
            { id }: any,
            context: ModuleContext<ApolloClientContext>,
        ) => {
            return context.injector
                .get<ProductsProvider>(ProductsProvider)
                .getProducts(id, context);
        },
    },
};
