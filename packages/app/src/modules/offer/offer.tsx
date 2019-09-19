import React from 'react';
import { useGetProductOfferQuery } from '../../graphql/_generated-hooks';
import style from './offer.scss';

type Props = {
    id: string;
};

export const Offer = ({ id }: Props) => {
    const { data } = useGetProductOfferQuery({
        variables: { id },
        ssr: false,
        fetchPolicy: 'cache-first',
    });

    if (!data) {
        return null;
    }
    return (
        <div className={style.root}>
            <div>{data.getProduct.offer.availabilityDescription}</div>
            <div>
                <strong>&euro; {data.getProduct.offer.price}</strong>
            </div>
            <div>{data.getProduct.offer.seller.displayName}</div>
        </div>
    );
};
