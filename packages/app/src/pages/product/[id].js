import * as React from 'react';
import { useRouter } from 'next/router';
import { withApollo } from '../../graphql/apollo';
import { App } from '../../modules/App';
import { Product } from '../../modules/product/product';
import { Offer } from '../../modules/offer/offer';

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
