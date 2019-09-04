import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { App } from '../components/App';
import { GET_PRODUCT } from '../components/product/get-product.graphql';
import { ProductDetails } from '../elements/product-details/product-details'



const Product = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log('render')
    const { data } = useQuery(
        GET_PRODUCT,
        {
          variables: { id: id.toString() },
        }
    );

    return (
        <App title="Products from BOL.com">
            {data ? <ProductDetails data={data} /> : null}
        </App>
        );
           
};

export default Product