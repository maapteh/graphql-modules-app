import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import * as introspectionQueryResultData from './_generatedFragmentTypes.json';

export const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: introspectionQueryResultData.default
});
