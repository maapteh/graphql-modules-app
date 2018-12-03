import { ModuleContext } from '@graphql-modules/core';
// import {  } from '../../../_generated-types';
import { ApolloClientContext } from '../../../app';
import { ProductProvider } from '../providers/product';

export default {
    Query: {
        getProducts: (
            _: any,
            { id }: any,
            context: ModuleContext<ApolloClientContext>,
        ) => {
            return context.injector
                .get<ProductProvider>(ProductProvider)
                .getProducts(id, context);
        },
    },
};
