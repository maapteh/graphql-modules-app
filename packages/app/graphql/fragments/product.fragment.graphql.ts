import gql from 'graphql-tag';

export const FRAGMENT_PRODUCT = gql`
    fragment product on Product {
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
`;