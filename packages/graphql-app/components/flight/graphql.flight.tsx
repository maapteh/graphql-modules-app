import gql from 'graphql-tag';

export const FLIGHT_QUERY = gql`
  query getFlight($id: String!) {
    getFlight(id: $id) {
      id
      title
    }
  }
`;
