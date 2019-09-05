import nodeFetch, { Response } from 'node-fetch';
const baseUrl = 'https://api.bol.com/catalog/v4';
const credentials = `apikey=${process.env.BOL_API_KEY}`;

export const productDataLoader = async (ids: number[]) => {
    const url = `${baseUrl}/products/${ids.join(
        ',',
    )}?offers=cheapest&includeAttributes=false&format=json&${credentials}`;

    const products = await nodeFetch(url, {
        headers: { ResourceVersion: 'v3' },
    })
        .then((res: Response) => {
            if (res) {
                return res.json();
            }
        })
        .then((res: any) => {
            if (res) {
                return res.products;
            }
            return null;
        });
    return products;
};
