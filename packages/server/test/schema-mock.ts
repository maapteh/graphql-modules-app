import { DATA_9200000113065845 } from './__mocks__/stubs/product-9200000113065845';
import { DATA_9200000111963040 } from './__mocks__/stubs/product-9200000111963040';
import { DATA_9200000113944705 } from './__mocks__/stubs/product-9200000113944705';
import { DATA_PRODUCTS } from './__mocks__/stubs/poducts';

/**
 * MOCKS PS4 games BOL.com open api
 */
export const MOCKS = {
    Query: () => ({
        getProduct: (_: any, {id}: any) => { 
            switch(id) {
                case '9200000111963040':
                    return DATA_9200000113065845;
                case '9200000111963040':
                    return DATA_9200000111963040;
                case '9200000113944705':
                    return DATA_9200000113944705
                default:
                    const dummy = {...DATA_9200000113065845};
                    dummy.title = 'Dummy product';
                    dummy.rating = 9000;
                    return dummy;
            }

        },
        getProducts: () => DATA_PRODUCTS
    })
}