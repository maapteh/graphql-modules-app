import React from 'react';
import { ProductDetails } from '../../elements/product-details/product-details';
import { useGetProductQuery } from '../../lib/_generated-types';

export const Product = ({ id }: any) => {
    const { data } = useGetProductQuery({
        variables: { id: id },
    });

    return <ProductDetails data={data} />;
};
