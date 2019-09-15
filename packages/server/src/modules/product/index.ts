import { GraphQLModule } from '@graphql-modules/core';
import { loadResolversFiles, loadSchemaFiles } from 'graphql-toolkit';

import { ProductProvider } from './providers/product';
import { commonModule } from '../common';

export const productModule = new GraphQLModule({
    name: 'products',
    providers: [ProductProvider],
    imports: [commonModule],
    typeDefs: loadSchemaFiles(`${__dirname}/schema/`),
    resolvers: loadResolversFiles(`${__dirname}/resolvers/`),
});
