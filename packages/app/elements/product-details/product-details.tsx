import React from 'react';
import { GetProductQuery } from '../../lib/_generated-types';
import './product.scss';

interface Props {
    data: GetProductQuery;
    short?: boolean;
}

export const ProductDetails = ({ data, short = false }: Props) => {
    const image =
        data &&
        data.getProduct &&
        data.getProduct.images &&
        data.getProduct.images.filter((i: any) => i.key === 'L')[0].url;
    const description =
        (data && data.getProduct && data.getProduct.shortDescription) || '';
    const desc = short ? `${description.substring(0, 720)} ...` : description;

    return data && data.getProduct ? (
        <section className="root">
            <div className="image">
                <img src={image} />
            </div>
            <h1>
                {data.getProduct.title} ({data.getProduct.rating})
            </h1>
            <p>{desc}</p>
            <p>
                <a href={data.getProduct.urls[0].value} target="_new">
                    see @bol.com
                </a>
            </p>
        </section>
    ) : null;
};
