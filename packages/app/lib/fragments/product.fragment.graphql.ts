import gql from 'graphql-tag';

export const FRAGMENT_PRODUCT = gql`
    fragment Product on Product {
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