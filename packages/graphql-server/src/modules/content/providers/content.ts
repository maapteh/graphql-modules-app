import { Injectable } from '@graphql-modules/core';
import { Content } from '../../../_generated-types';
import { ApolloClientContext } from '../../../app';

@Injectable()
export class ContentProvider {
    constructor() {}

    public async getContentPage(
        id: string,
        { context }: ApolloClientContext,
    ): Promise<Content> {
        return {};
    }
}
