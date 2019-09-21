import { ModuleContext } from '@graphql-modules/core';
import { Resolvers } from '../../../_graphql';
import { ApolloClientContext } from '../../common';
import { ProductProvider } from '../providers/product';
import { OfferProvider } from '../../offer/providers/offer';

const resolvers: Resolvers = {
    Query: {
        getProducts: (
            _,
            { id },
            { injector }: ModuleContext<ApolloClientContext>,
        ) => {
            return injector
                .get<ProductProvider>(ProductProvider)
                .getProducts(id);
        },

        getProduct: (
            _,
            { id },
            { injector }: ModuleContext<ApolloClientContext>,
        ) => {
            return injector
                .get<ProductProvider>(ProductProvider)
                .getProduct(id);
        },
    },
};

export default resolvers;
