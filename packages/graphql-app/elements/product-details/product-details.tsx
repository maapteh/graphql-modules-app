import React from 'react';
import { GetProductQuery } from '../../lib/_generated-types';
import './product.scss';

interface Props {
    data: GetProductQuery;
}

export const ProductDetails = ({ data }: Props) => {
    const image =
        data &&
        data.getProduct &&
        data.getProduct.images &&
        data.getProduct.images.filter((i: any) => i.key === 'L')[0].url;

    return data && data.getProduct ? (
        <section>
            <div className="product__image">
                <img src={image} />
            </div>
            <h1>
                {data.getProduct.title} ({data.getProduct.rating})
            </h1>
            <p>{data.getProduct.shortDescription}</p>
            <p>
                <a href={data.getProduct.urls[0].value} target="_new">
                    see @bol.com
                </a>
            </p>
        </section>
    ) : null;
};
