import React from 'react';
import { ProductDetails } from './elements/product-details/product-details';
import { useGetProductQuery } from '../../graphql/_generated-hooks';

export interface ProductProps extends React.HTMLAttributes<HTMLElement> {
    id: string;
    ssr: boolean;
    context: any;
    short?: boolean;
}

// TODO: HOC/with for Product
export const ProductComponent = ({
    id,
    ssr,
    context = {},
    short = false,
}: ProductProps) => {
    const { data, loading } = useGetProductQuery({
        variables: { id },
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