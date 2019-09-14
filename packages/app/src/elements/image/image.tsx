import React from 'react';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import style from './image.scss';

// TODO: add aspect ratio's

type Props = {
    url: string;
    title?: string;
    rootMargin?: string;
};

export const Image = ({ url, title = '', rootMargin }: Props) => {
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

    if (inView && !image) {
        setImage(url);
    }

    const css = classNames(style.root, image && `${style.appear}`);

    return (
        <div ref={ref} className={css}>
            {image && <img src={url} alt={title} className={style.img} />}
        </div>
    );
};
