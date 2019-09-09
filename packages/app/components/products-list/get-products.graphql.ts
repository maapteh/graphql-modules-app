import gql from 'graphql-tag';
import { FRAGMENT_PRODUCT } from '../../lib/fragments/product.fragment.graphql';

export const GET_PRODUCTS = gql`query getProducts($id: String!) {
    getProducts(id: $id) {
        products {
            ...Product
        }
    }
    ${FRAGMENT_PRODUCT}
}`;
