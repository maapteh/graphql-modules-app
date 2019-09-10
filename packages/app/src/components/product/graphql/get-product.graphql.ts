import gql from 'graphql-tag';
import { FRAGMENT_PRODUCT } from '../../../graphql/fragments/product.fragment.graphql';

// Be aware that the useQuery Hook will be created automatically from this source!
// We will only import this for tests, not in the component itself.
export const GET_PRODUCT = gql`
    query getProduct($id: String!) {
        getProduct(id: $id) {
            ...product
        }
    }
    ${FRAGMENT_PRODUCT}
`;
