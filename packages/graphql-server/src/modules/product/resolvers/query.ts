import { ModuleContext } from '@graphql-modules/core';
import { Resolvers } from '../../../_graphql';
import { ApolloClientContext } from '../../common';
import { ProductProvider } from '../providers/product';

const resolvers: Resolvers = {
    Query: {
        getProducts: (
            _,
            { id },
            { injector }: ModuleContext<ApolloClientContext>,
        ) => {
            const productId = parseInt(id);
            return injector
                .get<ProductProvider>(ProductProvider)
                .getProducts(productId);
        },

        getProduct: (
            _,
            { id },
            { injector }: ModuleContext<ApolloClientContext>,
        ) => {
            const productId = parseInt(id);
            return injector
                .get<ProductProvider>(ProductProvider)
                .getProduct(productId);
        },
    },
};

export default resolvers;
