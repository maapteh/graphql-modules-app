import * as React from 'react';
import { useRouter } from 'next/router';
import { withApollo } from '../../src/graphql/apollo';
import { App } from '../../src/components/App';
import { Product } from '../../src/components/product/product';

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
