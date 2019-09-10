import React from 'react';
import Link from 'next/link';
import style from './header.scss';

export const Header = () => {
    return (
        <header className={style.header}>
            <Link href="/">
                <a href="/" className={style.headerLogo}>
                    <img
                        src="/static/logo.svg"
                        alt="Apollo GraphQL"
                        className={style.img}
                    />
                </a>
            </Link>
            <Link href="/products">
                <a href="/products" className={style.headerLink}>
                    Products
                </a>
            </Link>
            <Link href="/example">
                <a href="/example" className={style.headerLink}>
                    Info
                </a>
            </Link>
        </header>
    );
};
