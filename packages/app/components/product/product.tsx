import React from 'react';
import { ProductDetails } from '../product-details/product-details';
import { useGetProductQuery } from '../../graphql/_generated-hooks';

export const Product = ({ id }: any) => {
    const { data } = useGetProductQuery({
        variables: { id },
    });

    return data ? <ProductDetails data={data} /> : null;
};
