import * as React from 'react';
import { App } from '../../components/App';
import { Product } from '../../components/product/product';
import { withApollo } from '../../lib/apollo';
import { useRouter } from 'next/router';

const ProductPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <App>
            <Product id={id} />
        </App>
    );
};

export default withApollo(ProductPage);
