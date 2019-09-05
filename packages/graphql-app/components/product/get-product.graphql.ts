import gql from 'graphql-tag';

export const GET_PRODUCT = gql`
    query getProduct($id: String!) {
        getProduct(id: $id) {
            id
            title
            rating
            shortDescription
            images {
                key
                url
            }
            urls {
                key
                value
            }
        }
    }
`;
