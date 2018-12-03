import { Injectable } from '@graphql-modules/core';
// import { ApolloError } from 'apollo-server-express';
// import { Flights, Flight } from '../../../_generated-types';
import { ApolloClientContext } from '../../../app';
import nodeFetch, { Response, RequestInit } from 'node-fetch';

@Injectable()
export class ProductsProvider {
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
        this.baseUrl = 'https://api.bol.com/catalog/v4';
        this.credentials = `apikey=${process.env.BOL_API_KEY}`;
    }

    public async getProducts(
        id: number,
        { context }: ApolloClientContext,
    ): Promise<any> {

        const url = `${this.baseUrl}/lists/?ids=${id}&limit=12&format=json&${this.credentials}`;

        return nodeFetch(url, {headers: { ResourceVersion: 'v3'}})
            .then(this.checkStatus)
            .then((res: Response) => {
                if (res) {
                    return res.json();
                }
            });
    }

}
