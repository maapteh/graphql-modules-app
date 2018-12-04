import { Injectable } from '@graphql-modules/di';
// import { ApolloError } from 'apollo-server-express';
import { Flights, Flight } from '../../../_generated-types';
import { ApolloClientContext } from '../../../app';
import nodeFetch, { Response, RequestInit } from 'node-fetch';

@Injectable()
export class FlightsProvider {
    private baseUrl: string;
    private credentials: string;

    // TODO: move to generic helper
    private checkStatus(res: any) {
        if (res.ok) { // res.status >= 200 && res.status < 300
            return res;
        }
        // TODO: throw error?
        return null;
    }

    constructor() {
        // TODO: move to config
        this.baseUrl = 'https://api.schiphol.nl/public-flights/flights';
        this.credentials = `app_id=${process.env.SCHIPHOL_API_ID}&app_key=${process.env.SCHIPHOL_API_KEY}`;
    }

    public async getFlights(
        id: string | null | undefined,
        { context }: ApolloClientContext,
    ): Promise<Flights> {

        const url = `${this.baseUrl}?${this.credentials}&includedelays=false&page=0&sort=%2Bscheduletime`;

        return nodeFetch(url, {headers: { ResourceVersion: 'v3'}})
            .then(this.checkStatus)
            .then((res: Response) => {
                if (res) {
                    return res.json();
                }
            });
    }

    public async getFlight(
        id: string,
        { context }: ApolloClientContext,
    ): Promise<Flight> {

        // NOT WORKING: REQUEST SENT TO SCHIPHOL GROUP
        return nodeFetch(`${this.baseUrl}/${id}?${this.credentials}`, {headers: { ResourceVersion: 'v3'}})
            .then(this.checkStatus)
            .then((res: Response) => {
                if (res) {
                    return res.json();
                }
            });
    }
}
