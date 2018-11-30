import gql from 'graphql-tag';

export const GET_FLIGHTS_QUERY = gql`
  query getFlights {
    getFlights {
      flights {
        id
        route {
          destinations
        }
        flightName
        flightNumber
        terminal
        gate
        actualLandingTime
        aircraftType {
          iatamain
        }
      }
    }
  }
`;
