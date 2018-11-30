import { ModuleContext } from '@graphql-modules/core';
import { GetContentPageQueryArgs } from '../../../_generated-types';
import { ApolloClientContext } from '../../../app';
import { ContentProvider } from '../providers/content';

export default {
    Query: {
        getContentPage: (
            _: any, // ContentModel
            { id }: GetContentPageQueryArgs,
            context: ModuleContext<ApolloClientContext>,
        ) => {
            return context.injector
                .get<ContentProvider>(ContentProvider)
                .getContentPage(id, context);
        },
    },
};
