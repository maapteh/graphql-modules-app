import 'reflect-metadata';
import { GraphQLModule } from '@graphql-modules/core';
// import { Injectable } from '@graphql-modules/di';
import {
    execute,
    GraphQLSchema,
    printSchema,
    GraphQLField,
    GraphQLEnumValue,
    GraphQLString,
    defaultFieldResolver,
} from 'graphql';
import gql from 'graphql-tag';

import { contentModule } from '../index';

function stripWhitespaces(str: string): string {
    return str
        .replace(/\s+/g, ' ')
        .replace(/\"\"\".*?\"\"\"/g, '')
        .trim();
}

// @ts-ignore
describe('Content Module', () => {
    let app: GraphQLModule;

    // @ts-ignore
    beforeEach(() => {
        app = new GraphQLModule({
            imports: [contentModule],
        });
    });

    // @ts-ignore
    it('boop', () => {});

    // @ts-ignore
    it('has correct schema (testing graphql-modules so useless test but showing for demonstration)', async () => {
        const { schema } = app;

        // @ts-ignore
        expect(schema).toBeDefined();
        // @ts-ignore
        expect((schema as any) instanceof GraphQLSchema).toBeTruthy();
        // @ts-ignore
        expect(stripWhitespaces(printSchema(schema))).toBe(
            `directive @cacheControl(maxAge: Int, scope: CacheControlScope) on OBJECT | FIELD_DEFINITION | INTERFACE enum CacheControlScope { PUBLIC PRIVATE } type Content { meta: ContentMeta components: [ContentComponent] }  interface ContentComponent { id: String! type: String! }  type ContentComponentArticle implements ContentComponent { id: String! type: String! title: String body: String }  type ContentComponentFreedelivery implements ContentComponent { id: String! type: String! billboard: ContentComponentFreedeliveryBillboard productGroups: [ContentComponentFreedeliveryProducts] } type ContentComponentFreedeliveryBillboard { title: String subtitle: String } type ContentComponentFreedeliveryProducts { title: String subtitle: String link: String label: String  imageSet: ContentImageSetSmallLarge }  type ContentComponentGlobalNotification implements ContentComponent { id: String! type: String! message: String link: String }  type ContentComponentHeader implements ContentComponent { id: String! type: String! title: String }  type ContentComponentPromo implements ContentComponent { id: String! type: String! items: [ContentComponentPromoItems] } type ContentComponentPromoItems { title: String buttonText: String link: String imageSet: ContentImageSetSmallLarge }  type ContentComponentShopWindow implements ContentComponent { id: String! type: String! title: String subtitle: String titleTag: Int imageSet: ContentImageSetSmallLarge link: String }  type ContentComponentUnknown implements ContentComponent { id: String! type: String! }  type ContentImageSetSmallLarge { description: String small: String large: String }  type ContentMeta { title: String description: String canonical: String! } type Query {  getContentPage(id: String!): Content }`,
        );
    });
});
