import React from 'react';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import style from './image.scss';

// TODO: add aspect ratio's

type Props = {
    url: string;
    title?: string;
    rootMargin?: string;
    instantImage?: boolean;
};

export const Image = ({
    url,
    title = '',
    rootMargin,
    instantImage = false,
}: Props) => {
    // This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections
    const margin =
        rootMargin && /((((.\d*)?(px))){4})/.test(rootMargin)
            ? rootMargin
            : '20px 0px 280px 0px';
    const [image, setImage] = React.useState();
    const [ref, inView] = useInView({
        threshold: 0,
        rootMargin: margin,
    });

    const css = classNames(style.block, style.hide, image && `${style.appear}`);
    const imageComponent = <img src={url} alt={title} className={style.img} />;

    if (instantImage) {
        return <div className={style.block}>{imageComponent}</div>;
    }

    if (inView && !image) {
        setImage(url);
    }

    return (
        <div ref={ref} className={css}>
            {image && imageComponent}
        </div>
    );
};
