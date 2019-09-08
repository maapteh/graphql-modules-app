import { Injectable, ProviderScope } from '@graphql-modules/di';
import dataloader from 'dataloader';
import nodeFetch, { Response } from 'node-fetch';
import { Products, Product } from '../../../_graphql';
import { checkStatus } from '../../common/helpers/check-status';
import { CREDENTIALS, BOL_API } from '../../common/constants';
import { productDataLoader } from './product-data-loader';

const foo = 'bar';

@Injectable({
    scope: ProviderScope.Session,
})
export class ProductProvider {
    private dataLoaderProduct: any;

    constructor() {
        this.dataLoaderProduct = new dataloader<string, string[]>(keys =>
            productDataLoader(keys),
        );
    }

    /**
     * Example 1: not dataloader used while it should
     */
    public async getProducts(id: string): Promise<Products> {
        const url = `${BOL_API}/lists/?ids=${id}&limit=12&format=json&${CREDENTIALS}`;

        return nodeFetch(url, { headers: { ResourceVersion: 'v4' } })
            .then(checkStatus)
            .then((res: Response | null) => (res && res.json()) || null);
    }

    /**
     * Example 2: dataloader being used for individual product information
     */
    public async getProduct(id: string): Promise<Product> {
        return this.dataLoaderProduct.load(id);
    }
}
