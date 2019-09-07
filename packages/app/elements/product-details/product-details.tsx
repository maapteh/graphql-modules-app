import React from 'react';
import { GetProductQuery } from '../../lib/_generated-types';
import style from './product-details.scss';
import Link from 'next/link';

interface Props {
    data: GetProductQuery;
    short?: boolean;
}

export const ProductDetails = ({ data, short = false }: Props) => {
    const product = data && data.getProduct;
    const image =
        product &&
        product.images &&
        product.images.filter((i: any) => i.key === 'L')[0].url;
    const description = (product && product.shortDescription) || '';
    const desc = short ? `${description.substring(0, 720)} ` : description;

    return product ? (
        <section className={style.root} lang="nl-NL">
            <div className={style.image}>
                <img src={image} />
            </div>
            <h1>
                {product.title} ({product.rating})
            </h1>
            <p>
                {desc}
                {short && (
                    <Link
                        href={`/product?id=${product.id}`}
                        as={`/product/${product.id}`}
                    >
                        <a>...more</a>
                    </Link>
                )}
            </p>
            {!short && (
                <p>
                    <a href={product.urls[0].value} target="_new">
                        see @bol.com
                    </a>
                </p>
            )}
        </section>
    ) : null;
};
