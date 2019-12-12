import React from 'react';
import { ProductDetails } from './elements/product-details/product-details';
import { useGetProductQuery } from '../../graphql/_generated-hooks';
import { ProductPlaceholder } from './elements/product-details/product-placeholder';

export interface ProductProps extends React.HTMLAttributes<HTMLElement> {
    id: string;
    ssr: boolean;
    context: any;
    short?: boolean;
}

// TODO: HOC/with for Product
export const ProductComponent = ({
    id,
    ssr = false,
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
            {loading && <ProductPlaceholder />}
            {data ? (
                <ProductDetails data={data} short={short} instantImage={ssr} />
            ) : null}
        </>
    );
};
