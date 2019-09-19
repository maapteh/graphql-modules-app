import gql from 'graphql-tag';

// Be aware that the useQuery Hook will be created automatically from this source!
// We will only import this for tests, not in the component itself.
export const GET_PRODUCT_OFFER = gql`
    query getProductOffer($id: String!) {
        getProduct(id: $id) {
            id
            offer {
                price
                availabilityDescription
                seller {
                    displayName
                }
            }
        }
    }
`;
