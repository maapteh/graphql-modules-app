import { ModuleContext } from '@graphql-modules/core';
import { Resolvers } from '../../../_graphql';
import { ApolloClientContext } from '../../common';
import { OfferProvider } from '../providers/offer';

const resolvers: Resolvers = {
    Query: {
        getOffer: (
            _,
            { id },
            { injector }: ModuleContext<ApolloClientContext>,
        ) => {
            return injector
                .get<OfferProvider>(OfferProvider)
                .getOffer(id);
        },
    },

    Product: {
        offer: (product, _, { injector }: ModuleContext) => {
            return injector.get(OfferProvider).getOffer(product.id);
        }
    }
};

export default resolvers;
