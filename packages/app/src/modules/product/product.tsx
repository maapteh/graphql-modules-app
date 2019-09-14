import React from 'react';
import { useGetProductQuery } from '../../graphql/_generated-hooks';
import { ProductDetails } from './elements/product-details/product-details';

type Props = {
    id: string;
};

export const Product = ({ id }: Props) => {
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
