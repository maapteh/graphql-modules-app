import React from 'react';
import { ProductDetails } from '../../elements/product-details/product-details';
import { useGetProductQuery } from '../../lib/_generated-types';

export interface ProductProps extends React.HTMLAttributes<HTMLElement> {
    id: any;
    ssr: boolean;
    context: any;
    short?: boolean;
}

export const ProductComponent = ({
    id,
    ssr,
    context = {},
    short = false,
}: ProductProps) => {
    const { data, loading } = useGetProductQuery({
        variables: { id: id.toString() },
        ssr,
        context,
    });

    return (
        <>
            {loading && <div>loading product...</div>}
            {data ? <ProductDetails data={data} short={short} /> : null}
        </>
    );
};
