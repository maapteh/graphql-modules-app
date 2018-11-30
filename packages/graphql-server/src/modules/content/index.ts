import { GraphQLModule } from '@graphql-modules/core';
import { mergeGraphQLSchemas, mergeResolvers } from '@graphql-modules/epoxy';
import { loadResolversFiles, loadSchemaFiles } from '@graphql-modules/sonar';

import { ContentProvider } from './providers/content';

export const contentModule = new GraphQLModule({
    name: 'content',
    providers: [ContentProvider],
    resolvers: mergeResolvers(loadResolversFiles(`${__dirname}/resolvers/`)),
    typeDefs: mergeGraphQLSchemas(loadSchemaFiles(`${__dirname}/schema/`)),
});
