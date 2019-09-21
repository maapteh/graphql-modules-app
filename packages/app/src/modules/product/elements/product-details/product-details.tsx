import * as React from 'react';
import Link from 'next/link';
import {
    GetProductQuery,
    ProductFragment,
} from '../../../../graphql/_generated-types';
import { Image } from '../../../../elements/image/image';
import style from './product-details.scss';

interface Props {
    data: GetProductQuery;
    short?: boolean;
}

export const ProductDetails = ({ data, short = false }: Props) => {
    const product: ProductFragment = data && data.getProduct;
    const foundImage =
        product &&
        product.images &&
        product.images.filter((i: any) => i.key === 'L');
    const image = foundImage && foundImage.length && foundImage[0].url;
    const description = (product && product.shortDescription) || '';
    const desc = short ? `${description.substring(0, 720)} ` : description;

    return product ? (
        <section
            className={style.root}
            lang="nl-NL"
            data-testid="product-details"
        >
            {Boolean(image) && <Image url={image} />}
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
                        <a href={`/product/${product.id}`}>...more</a>
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
