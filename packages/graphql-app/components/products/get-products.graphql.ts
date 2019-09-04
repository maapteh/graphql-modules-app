import gql from 'graphql-tag'

export const GET_PRODUCTS = gql`
    query getProducts($id: String!) {
        getProducts(id: $id) {
            products {
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
    }
`