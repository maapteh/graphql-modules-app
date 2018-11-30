import { Injectable } from '@graphql-modules/core';
import { Flights, Flight } from '../../../_generated-types';
import { ApolloClientContext } from '../../../app';
import nodeFetch, { Response, RequestInit } from 'node-fetch';

@Injectable()
export class FlightsProvider {
    private baseUrl: string;
    private credentials: string;

    constructor() {
        // TODO: move to config
        this.baseUrl = 'https://api.schiphol.nl/public-flights/flights';
        this.credentials = `app_id=${process.env.SCHIPHOL_API_ID}&app_key=${process.env.SCHIPHOL_API_KEY}`;
    }

    public async getFlights(
        id: string | null | undefined,
        { context }: ApolloClientContext,
    ): Promise<Flights> {

        return nodeFetch(`${this.baseUrl}?${this.credentials}&includedelays=false&page=0&sort=%2Bscheduletime`, {headers: { ResourceVersion: 'v3'}}).then((res: any) => {
            return res.json();
        });
    }

    public async getFlight(
        id: string,
        { context }: ApolloClientContext,
    ): Promise<Flight> {

        // NOT WORKING: REQUEST SENT TO SCHIPHOL GROUP
        return nodeFetch(`${this.baseUrl}/${id}?${this.credentials}`, {headers: { ResourceVersion: 'v3'}}).then((res: any) => {
            console.log(res);
            return res.json();
        });
    }
}
