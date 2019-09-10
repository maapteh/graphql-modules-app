import gql from 'graphql-tag';
import { FRAGMENT_PRODUCT } from '../../graphql/fragments/product.fragment.graphql';

export const GET_PRODUCT = gql`
    query getProduct($id: String!) {
        getProduct(id: $id) {
            ...product
        }
    }
    ${FRAGMENT_PRODUCT}
`;
