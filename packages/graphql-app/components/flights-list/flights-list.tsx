import { Query } from 'react-apollo';
import Link from 'next/link';
import { ErrorMessage } from '../ErrorMessage';
import { GET_FLIGHTS_QUERY } from './graphql.all-flights';

import './flights.scss';

export const FlightsList = () => (

  <Query query={GET_FLIGHTS_QUERY}>
    {({loading, error, data: {getFlights}}) => {
      if (error) <ErrorMessage message="Error loading flights." />;
      if (loading) <div>Loading</div>;

      return (
        <section>
          <h1>Current Flights</h1>

            {getFlights.flights.map((flight: any, index: number) => {

              return (
                <div key={`${flight.id}-${index}`}>
                  {flight.flightName} {flight.terminal} {flight.gate}
                  <Link href={`/flight?id=${flight.id}`}><a>nwy</a></Link>
                </div>
              );
            })}

        </section>
      );
    }}
  </Query>

);
