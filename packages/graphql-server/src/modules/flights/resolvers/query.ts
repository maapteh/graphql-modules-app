import { ModuleContext } from '@graphql-modules/core';
import { Flight, Flights, GetFlightsQueryArgs, GetFlightQueryArgs } from '../../../_generated-types';
import { ApolloClientContext } from '../../../app';
import { FlightsProvider } from '../providers/flights';

export default {
    Query: {
        getFlights: (
            _: Flights,
            { id }: GetFlightsQueryArgs,
            context: ModuleContext<ApolloClientContext>,
        ) => {
            return context.injector
                .get<FlightsProvider>(FlightsProvider)
                .getFlights(id, context);
        },
        getFlight: (
            _: Flight,
            { id }: GetFlightQueryArgs,
            context: ModuleContext<ApolloClientContext>,
        ) => {
            return context.injector
                .get<FlightsProvider>(FlightsProvider)
                .getFlight(id, context);
        },
    },
};
