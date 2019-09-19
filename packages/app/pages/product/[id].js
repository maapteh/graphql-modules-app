import * as React from 'react';
import { useRouter } from 'next/router';
import { withApollo } from '../../src/graphql/apollo';
import { App } from '../../src/modules/App';
import { Product } from '../../src/modules/product/product';
import { Offer } from '../../src/modules/offer/offer';

const ProductPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <App>
            <Product id={id} />
            <Offer id={id} />
        </App>
    );
};

export default withApollo(ProductPage);
