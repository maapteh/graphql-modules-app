import { ModuleContext } from '@graphql-modules/core';
import { ApolloClientContext } from '../../common';
import { ProductProvider } from '../providers/product';

export default {
    Query: {
        getProducts: (
            _: any,
            { id }: any,
            { injector }: ModuleContext<ApolloClientContext>,
        ) => {
            return injector
                .get<ProductProvider>(ProductProvider)
                .getProducts(id);
        },

        getProduct: (
            _: any,
            { id }: any,
            { injector }: ModuleContext<ApolloClientContext>,
        ) => {
            return injector
                .get<ProductProvider>(ProductProvider)
                .getProduct(id);
        },
    },
};
