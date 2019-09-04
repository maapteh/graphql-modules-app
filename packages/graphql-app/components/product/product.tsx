import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { GET_PRODUCT } from './get-product.graphql';
import { ProductDetails } from '../../elements/product-details/product-details'

export const Product = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log('render')
    const { data } = useQuery(
        GET_PRODUCT,
        {
          variables: { id: id.toString() },
        }
    );

    return data ? <ProductDetails data={data} /> : null;
           
};
