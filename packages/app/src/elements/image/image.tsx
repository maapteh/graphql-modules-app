import React from 'react';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import style from './image.scss';

type Props = {
    url: string;
};
export const Image = ({ url }: Props) => {
    const [image, setImage] = React.useState();
    const [ref, inView] = useInView({
        threshold: 0,
        rootMargin: '20px 0px 400px 0px',
    });

    if (inView && !image) {
        setImage(url);
    }

    const css = classNames(style.root, image && `${style.appear}`);

    return (
        <div ref={ref} className={css}>
            {image && <img src={url} alt="" className={style.img} />}
        </div>
    );
};
