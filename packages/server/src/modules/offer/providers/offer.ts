import { Injectable, ProviderScope } from '@graphql-modules/di';
import nodeFetch, { Response } from 'node-fetch';
import { Offer } from '../../../_graphql';
import { checkStatus } from '../../../helpers';
import { CREDENTIALS, BOL_API } from '../../../constants';

@Injectable({
    scope: ProviderScope.Session,
})
export class OfferProvider {

    constructor() { }

    /**
     * BAD EXAMPLE, THIS SHOULD BE A DATALOADER! NOW REQUESTED PER PRODUCT ITEM...
     */
    public async getOffer(id: string): Promise<Offer> {
        const url = `${BOL_API}/offers/${id}?offers=cheapest&format=json&${CREDENTIALS}`;
        
        console.log(`[BAD] no dataloader: ${url.slice(0, -40)}`);

        return nodeFetch(url, { headers: { ResourceVersion: 'v4' } })
            .then(checkStatus)
            .then((res: Response | null) => (res && res.json()) || null)
            .then((res: any) => {
                return (res && res.offerData && res.offerData.offers && res.offerData.offers.length && res.offerData.offers[0]) || null;
            });
    }

}
