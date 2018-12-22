import { GraphQLModule } from '@graphql-modules/core';
import { mergeGraphQLSchemas, mergeResolvers } from '@graphql-modules/epoxy';
import { loadResolversFiles, loadSchemaFiles } from '@graphql-modules/sonar';

import { ProductProvider } from './providers/product';
import { commonModule } from '../common';

export const productModule = new GraphQLModule({
    name: 'products',
    providers: [ProductProvider],
    imports: [commonModule],
    resolvers: mergeResolvers(loadResolversFiles(`${__dirname}/resolvers/`)),
    typeDefs: mergeGraphQLSchemas(loadSchemaFiles(`${__dirname}/schema/`)),
});
