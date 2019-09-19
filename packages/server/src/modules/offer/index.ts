import { GraphQLModule } from '@graphql-modules/core';
import { loadResolversFiles, loadSchemaFiles } from 'graphql-toolkit';

import { OfferProvider } from './providers/offer';
import { commonModule } from '../common';

export const offerModule = new GraphQLModule({
    name: 'offer',
    providers: [OfferProvider],
    imports: [commonModule],
    typeDefs: loadSchemaFiles(`${__dirname}/schema/`),
    resolvers: loadResolversFiles(`${__dirname}/resolvers/`),
});
