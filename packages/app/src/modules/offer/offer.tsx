import React from 'react';
import { useGetOfferQuery } from '../../graphql/_generated-hooks';
import style from './offer.scss';

type Props = {
    id: string;
};

export const Offer = ({ id }: Props) => {
    const { data } = useGetOfferQuery({
        variables: { id },
        ssr: false,
        fetchPolicy: 'cache-first',
    });

    if (!data) {
        return null;
    }
    const offer = data.getOffer;

    return (
        <div className={style.root}>
            {offer.availabilityDescription && (
                <div>{offer.availabilityDescription}</div>
            )}
            <div>
                <strong>&euro; {offer.price}</strong>
            </div>
            <div>
                <i>{offer.seller.displayName}</i>
            </div>
        </div>
    );
};
