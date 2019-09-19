import { GraphQLModule } from '@graphql-modules/core';
import { loadResolversFiles, loadSchemaFiles } from 'graphql-toolkit';

import { ProductProvider } from './providers/product';

import { offerModule } from '../offer';
import { commonModule } from '../common';

export const productModule = new GraphQLModule({
    name: 'products',
    providers: [ProductProvider],
    imports: [offerModule, commonModule],
    typeDefs: loadSchemaFiles(`${__dirname}/schema/`),
    resolvers: loadResolversFiles(`${__dirname}/resolvers/`),
});
