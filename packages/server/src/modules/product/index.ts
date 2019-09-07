import { GraphQLModule } from '@graphql-modules/core';
import { loadSchemaFiles } from '@graphql-modules/sonar';
import { mergeGraphQLSchemas } from '@graphql-modules/epoxy';
import { IResolvers } from 'graphql-tools';

import { ProductProvider } from './providers/product';
import { commonModule } from '../common';
import resolvers from './resolvers/query';

export const productModule = new GraphQLModule({
    name: 'products',
    providers: [ProductProvider],
    imports: [commonModule],
    typeDefs: mergeGraphQLSchemas(loadSchemaFiles(`${__dirname}/schema/`)),
    resolvers: resolvers as IResolvers,
});
