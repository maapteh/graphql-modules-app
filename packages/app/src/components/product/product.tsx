import React from 'react';
import { useGetProductQuery } from '../../graphql/_generated-hooks';
import { ProductDetails } from './elements/product-details/product-details';

export const Product = ({ id }: any) => {
    const { data } = useGetProductQuery({
        variables: { id },
    });

    return data ? <ProductDetails data={data} /> : null;
};
