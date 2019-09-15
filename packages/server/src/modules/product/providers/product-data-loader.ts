import nodeFetch, { Response } from 'node-fetch';
import { checkStatus } from '../../../helpers';
import { CREDENTIALS, BOL_API } from '../../../constants';

export const productDataLoader = async (ids: string[]) => {
    const url = `${BOL_API}/products/${ids.join(
        ',',
    )}?offers=cheapest&includeAttributes=false&format=json&${CREDENTIALS}`;

    console.log(`dataloader: ${url.slice(0, -40)}`);

    const products = await nodeFetch(url, {
        headers: { ResourceVersion: 'v4' },
    })
        .then(checkStatus)
        .then((res: Response | null) => res && res.json())
        .then((res: any) => (res && res.products) || null);

    // TODO: when one/more products are not retrieved correctly give it back as null
    return products ? products : [null];
};
