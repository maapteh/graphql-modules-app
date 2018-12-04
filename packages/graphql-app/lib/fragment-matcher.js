import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import * as introspectionQueryResultData from './_generated-fragment-types.json';

export const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: introspectionQueryResultData.default,
});
