import React from 'react';
import { useGetProductQuery } from '../../graphql/_generated-hooks';
import { ProductDetails } from './elements/product-details/product-details';

type Props = {
    id: string;
};

export const Product = ({ id }: Props) => {
    const { data } = useGetProductQuery({
        variables: { id },
    });
    return <>{data && <ProductDetails data={data} />}</>;
};
