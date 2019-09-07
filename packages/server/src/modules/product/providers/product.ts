import { Injectable, ProviderScope } from '@graphql-modules/di';
import dataloader from 'dataloader';
import { Products, Product } from '../../../_graphql';
import nodeFetch, { Response } from 'node-fetch';
import { productDataLoader } from './product-data-loader';

@Injectable({
    scope: ProviderScope.Session,
})
export class ProductProvider {
    private baseUrl: string;
    private credentials: string;
    private dataLoaderProducts: any;

    // TODO: move to generic helper
    private checkStatus(res: any) {
        if (res.ok) {
            // res.status >= 200 && res.status < 300
            return res;
        }
        // TODO: throw error?
        return null;
    }

    constructor() {
        this.baseUrl = 'https://api.bol.com/catalog/v4';
        this.credentials = `apikey=${process.env.BOL_API_KEY}`;
        this.dataLoaderProducts = new dataloader<number, number[]>(keys =>
            productDataLoader(keys),
        );
    }

    public async getProducts(id: number): Promise<Products> {
        const url = `${this.baseUrl}/lists/?ids=${id}&limit=12&format=json&${this.credentials}`;
        return nodeFetch(url, { headers: { ResourceVersion: 'v4' } })
            .then(this.checkStatus)
            .then((res: Response) => {
                if (res) {
                    return res.json();
                }
            });
    }

    public async getProduct(id: number): Promise<Product> {
        return this.dataLoaderProducts.load(id);
    }
}
