import React from 'react';
import { ProductDetails } from '../product-details/product-details';
import { useGetProductQuery } from '../../lib/_generated-types';

export const Product = ({ id }: any) => {
    const { data } = useGetProductQuery({
        variables: { id },
    });

    return <ProductDetails data={data} />;
};
