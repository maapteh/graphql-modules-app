import React from 'react';
import { useGetProductQuery } from '../../graphql/_generated-hooks';
import { ProductDetails } from './elements/product-details/product-details';
import { ProductPlaceholder } from './elements/product-details/product-placeholder';

type Props = {
    id: string;
    instantImage?: boolean;
};

export const Product = ({ id, instantImage = false }: Props) => {
    const { data, loading } = useGetProductQuery({
        variables: { id },
    });
    return (
        <>
            {loading && <ProductPlaceholder />}
            {data && <ProductDetails data={data} instantImage={instantImage} />}
        </>
    );
};
