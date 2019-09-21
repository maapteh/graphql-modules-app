import gql from 'graphql-tag';

// Be aware that the useQuery Hook will be created automatically from this source!
// We will only import this for tests, not in the component itself.
export const GET_OFFER = gql`
    query getOffer($id: String!) {
        getOffer(id: $id) {
            id
            price
            availabilityDescription
            seller {
                displayName
            }
        }
    }
`;
