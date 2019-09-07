import * as React from 'react';
import { useRouter } from 'next/router';
import { withApollo } from '../../lib/apollo';
import { App } from '../../components/App';
import { Product } from '../../components/product/product';

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
