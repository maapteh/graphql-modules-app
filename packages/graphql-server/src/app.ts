import { GraphQLModule } from '@graphql-modules/core';
// TODO: Sample with dummy data, no keys needed
import { contentModule } from './modules/content';
// When you have an OpenApi key from Schiphol.nl
import { flightsModule } from './modules/flights';
// When you have an OpenApi key from Bol.com
import { productsModule } from './modules/products';

export interface ApolloClientContext {
    tokenType: string;
    context: string;
}

export const appModule = new GraphQLModule({
    /** a list of `GraphQLModule` you wish to load to your app */
    imports: [
        contentModule,
        flightsModule,
        productsModule,
    ],
    /** Object map between `Type.field` to a function(s) that will wrap the resolver of the field */
    resolversComposition: {},
    /** List of external providers to load into the injector */
    providers: [],
    contextBuilder: (
        networkRequest: any,
        currentContext: object,
    ): ApolloClientContext => {
        return {
            context: 'foo',
            tokenType: '123',
        };
    },
});
