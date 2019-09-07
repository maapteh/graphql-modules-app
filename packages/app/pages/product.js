import React from 'react';
import { useRouter } from 'next/router';
import { withApollo } from '../lib/apollo';
import { useGetProductQuery } from '../lib/_generated-types';
import { App } from '../components/App';
import { ProductDetails } from '../elements/product-details/product-details';

const ProductPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { data } = useGetProductQuery({
        variables: { id: id.toString() },
    });

    return (
        <App title="Products from BOL.com">
            {data ? <ProductDetails data={data} /> : null}
        </App>
    );
};

export default withApollo(ProductPage);
