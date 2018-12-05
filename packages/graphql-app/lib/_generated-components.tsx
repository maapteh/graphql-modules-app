/* auto generated do not edit */

export enum CacheControlScope {
    Public = 'PUBLIC',
    Private = 'PRIVATE',
}

// ====================================================
// Documents
// ====================================================

export type GetFlightVariables = {
    id: string;
};

export type GetFlightQuery = {
    __typename?: 'Query';

    getFlight: GetFlightGetFlight | null;
};

export type GetFlightGetFlight = {
    __typename?: 'Flight';

    id: string | null;

    title: string | null;
};

export type GetFlightsVariables = {};

export type GetFlightsQuery = {
    __typename?: 'Query';

    getFlights: GetFlightsGetFlights | null;
};

export type GetFlightsGetFlights = {
    __typename?: 'Flights';

    flights: GetFlightsFlights[] | null;
};

export type GetFlightsFlights = {
    __typename?: 'Flight';

    id: string | null;

    route: GetFlightsRoute | null;

    flightName: string | null;

    flightNumber: number | null;

    terminal: number | null;

    gate: string | null;

    actualLandingTime: string | null;

    aircraftType: GetFlightsAircraftType | null;
};

export type GetFlightsRoute = {
    __typename?: 'RouteType';

    destinations: string[] | null;
};

export type GetFlightsAircraftType = {
    __typename?: 'AircraftTypeType';

    iatamain: string | null;
};

export type GetProductVariables = {
    id: string;
};

export type GetProductQuery = {
    __typename?: 'Query';

    getProduct: GetProductGetProduct | null;
};

export type GetProductGetProduct = {
    __typename?: 'Product';

    title: string | null;

    rating: number | null;

    shortDescription: string | null;

    images: GetProductImages[] | null;
};

export type GetProductImages = {
    __typename?: 'ProductImages';

    key: string | null;

    url: string | null;
};

export type GetProductsVariables = {
    id: string;
};

export type GetProductsQuery = {
    __typename?: 'Query';

    getProducts: GetProductsGetProducts | null;
};

export type GetProductsGetProducts = {
    __typename?: 'Products';

    products: GetProductsProducts[] | null;
};

export type GetProductsProducts = {
    __typename?: 'Product';

    id: string | null;

    title: string | null;
};

import * as ReactApollo from 'react-apollo';
import * as React from 'react';

import gql from 'graphql-tag';

// ====================================================
// Components
// ====================================================

export const GetFlightDocument = gql`
    query getFlight($id: String!) {
        getFlight(id: $id) {
            id
            title
        }
    }
`;
export class GetFlightComponent extends React.Component<
    Partial<ReactApollo.QueryProps<GetFlightQuery, GetFlightVariables>>
> {
    render() {
        return (
            <ReactApollo.Query<GetFlightQuery, GetFlightVariables>
                query={GetFlightDocument}
                {...(this as any)['props'] as any}
            />
        );
    }
}
export type GetFlightProps<TChildProps = any> = Partial<
    ReactApollo.DataProps<GetFlightQuery, GetFlightVariables>
> &
    TChildProps;
export function GetFlightHOC<TProps, TChildProps = any>(
    operationOptions:
        | ReactApollo.OperationOption<
              TProps,
              GetFlightQuery,
              GetFlightVariables,
              GetFlightProps<TChildProps>
          >
        | undefined,
) {
    return ReactApollo.graphql<
        TProps,
        GetFlightQuery,
        GetFlightVariables,
        GetFlightProps<TChildProps>
    >(GetFlightDocument, operationOptions);
}
export const GetFlightsDocument = gql`
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
export class GetFlightsComponent extends React.Component<
    Partial<ReactApollo.QueryProps<GetFlightsQuery, GetFlightsVariables>>
> {
    render() {
        return (
            <ReactApollo.Query<GetFlightsQuery, GetFlightsVariables>
                query={GetFlightsDocument}
                {...(this as any)['props'] as any}
            />
        );
    }
}
export type GetFlightsProps<TChildProps = any> = Partial<
    ReactApollo.DataProps<GetFlightsQuery, GetFlightsVariables>
> &
    TChildProps;
export function GetFlightsHOC<TProps, TChildProps = any>(
    operationOptions:
        | ReactApollo.OperationOption<
              TProps,
              GetFlightsQuery,
              GetFlightsVariables,
              GetFlightsProps<TChildProps>
          >
        | undefined,
) {
    return ReactApollo.graphql<
        TProps,
        GetFlightsQuery,
        GetFlightsVariables,
        GetFlightsProps<TChildProps>
    >(GetFlightsDocument, operationOptions);
}
export const GetProductDocument = gql`
    query getProduct($id: String!) {
        getProduct(id: $id) {
            title
            rating
            shortDescription
            images {
                key
                url
            }
        }
    }
`;
export class GetProductComponent extends React.Component<
    Partial<ReactApollo.QueryProps<GetProductQuery, GetProductVariables>>
> {
    render() {
        return (
            <ReactApollo.Query<GetProductQuery, GetProductVariables>
                query={GetProductDocument}
                {...(this as any)['props'] as any}
            />
        );
    }
}
export type GetProductProps<TChildProps = any> = Partial<
    ReactApollo.DataProps<GetProductQuery, GetProductVariables>
> &
    TChildProps;
export function GetProductHOC<TProps, TChildProps = any>(
    operationOptions:
        | ReactApollo.OperationOption<
              TProps,
              GetProductQuery,
              GetProductVariables,
              GetProductProps<TChildProps>
          >
        | undefined,
) {
    return ReactApollo.graphql<
        TProps,
        GetProductQuery,
        GetProductVariables,
        GetProductProps<TChildProps>
    >(GetProductDocument, operationOptions);
}
export const GetProductsDocument = gql`
    query getProducts($id: String!) {
        getProducts(id: $id) {
            products {
                id
                title
            }
        }
    }
`;
export class GetProductsComponent extends React.Component<
    Partial<ReactApollo.QueryProps<GetProductsQuery, GetProductsVariables>>
> {
    render() {
        return (
            <ReactApollo.Query<GetProductsQuery, GetProductsVariables>
                query={GetProductsDocument}
                {...(this as any)['props'] as any}
            />
        );
    }
}
export type GetProductsProps<TChildProps = any> = Partial<
    ReactApollo.DataProps<GetProductsQuery, GetProductsVariables>
> &
    TChildProps;
export function GetProductsHOC<TProps, TChildProps = any>(
    operationOptions:
        | ReactApollo.OperationOption<
              TProps,
              GetProductsQuery,
              GetProductsVariables,
              GetProductsProps<TChildProps>
          >
        | undefined,
) {
    return ReactApollo.graphql<
        TProps,
        GetProductsQuery,
        GetProductsVariables,
        GetProductsProps<TChildProps>
    >(GetProductsDocument, operationOptions);
}
