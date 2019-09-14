import gql from 'graphql-tag';
import { FRAGMENT_PRODUCT } from '../../../graphql/fragments/product.fragment.graphql';

// Be aware that the useQuery Hook will be created automatically from this source!
// We will only import this for tests, not in the component itself.
export const GET_PRODUCTS = gql`
    query getProducts($id: String!) {
        getProducts(id: $id) {
            products {
                ...product
            }
        }
    }
    ${FRAGMENT_PRODUCT}
`;
