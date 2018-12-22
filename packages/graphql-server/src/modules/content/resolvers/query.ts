import { GraphQLModule, ModuleContext } from '@graphql-modules/core';
import { GetContentPageQueryArgs } from '../../../_generated-types';
import { ApolloClientContext } from '../../common';
import { ContentProvider } from '../providers/content';

export default ({ injector }: GraphQLModule) => ({
    Query: {
        getContentPage: (
            _: any, // ContentModel
            { id }: GetContentPageQueryArgs,
            context: ModuleContext<ApolloClientContext>,
        ) => {
            return injector
                .get<ContentProvider>(ContentProvider)
                .getContentPage(id, context);
        },
    },
});
