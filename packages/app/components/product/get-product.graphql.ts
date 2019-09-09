import gql from 'graphql-tag';
import { FRAGMENT_PRODUCT } from '../../lib/fragments/product.fragment.graphql';

export const GET_PRODUCT = gql`query getProduct($id: String!) {
    getProduct(id: $id) {
        ...Product
    }
    ${FRAGMENT_PRODUCT}
}`;
