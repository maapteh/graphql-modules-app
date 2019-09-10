import React from 'react';
import { useGetProductQuery } from '../../graphql/_generated-hooks';
import { ProductDetails } from './elements/product-details/product-details';

export const Product = ({ id }: any) => {
    const { data, loading } = useGetProductQuery({
        variables: { id },
    });

    return (
        <>
            {loading && <span>loading...</span>}
            {data && <ProductDetails data={data} />}
        </>
    );
};
