import { Query } from 'react-apollo';
import Link from 'next/link';
import { ErrorMessage } from '../ErrorMessage';
import { GetFlightsComponent, GetFlightsFlights } from '../../lib/_generated-components';

import './flights.scss';

export const FlightsList = () => (

    <GetFlightsComponent>
        {({ loading, error, data: { getFlights } }) => {
            if (error) { <ErrorMessage message="Error loading flights." />; }
            if (loading) { <div>Loading</div>; }

            return(
                <section>
                    <h1>Current Flights</h1>

                    {getFlights && getFlights.flights && getFlights.flights.map((flight: GetFlightsFlights, index: number) => {

                    return (
                        <div key={`${flight.id}-${index}`}>
                        {flight.flightName} {flight.terminal} {flight.gate}
                        <Link href={`/flight?id=${flight.id}`}><a>nwy</a></Link>
                        </div>
                    );
                    })}

                </section>
            )
        }}
    </GetFlightsComponent>
);
