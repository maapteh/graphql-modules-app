import gql from 'graphql-tag';
import { FRAGMENT_PRODUCT } from '../../graphql/fragments/product.fragment.graphql';

export const GET_PRODUCTS = gql`query getProducts($id: String!) {
    getProducts(id: $id) {
        products {
            ...product
        }
    }
    ${FRAGMENT_PRODUCT}
}`;
