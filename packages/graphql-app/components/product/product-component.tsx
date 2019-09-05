import React from 'react';
import { ProductDetails } from '../../elements/product-details/product-details';
import { useGetProductQuery } from '../../lib/_generated-types';

export interface ProductProps extends React.HTMLAttributes<HTMLElement> {
    id: any;
    ssr: boolean;
    context: any;
}

export const ProductComponent = ({ id, ssr, context = {} }: ProductProps) => {
    const { data, loading } = useGetProductQuery({
        variables: { id: id.toString() },
        ssr: ssr,
        context: context,
    });

    return (
        <React.Fragment>
            {loading && <div>loading product...</div>}
            {data ? <ProductDetails data={data} /> : null}
        </React.Fragment>
    );
};
