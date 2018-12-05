import * as React from 'react';
import { ErrorMessage } from '../ErrorMessage';
import { GetProductComponent } from '../../lib/_generated-components';
import './product.scss';

export const Product = ({ id }: any) => {
    const queryVars = {
        id: id.toString(),
    };

    return (
        <GetProductComponent variables={queryVars}>
            {({ loading, error, data: { getProduct } }) => {
                if (error) <ErrorMessage message="Error loading product." />;
                if (loading) <div>Loading</div>;

                const image =
                    getProduct &&
                    getProduct.images &&
                    getProduct.images.filter((i: any) => i.key === 'L')[0].url;

                return (
                    <section>
                        {getProduct && (
                            <React.Fragment>
                                <img src={image} className="product__image" />
                                <h1>
                                    {getProduct.title} ({getProduct.rating})
                                </h1>
                                <p>{getProduct.shortDescription}</p>
                            </React.Fragment>
                        )}
                    </section>
                );
            }}
        </GetProductComponent>
    );
};
