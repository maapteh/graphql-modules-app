import React from 'react';
import Link from 'next/link';

import './header.scss';

export const Header = () => {
    return (
        <header className="header">
            <Link href="/">
                <a className="header__logo">
                    <img src="/static/logo.svg" alt="Apollo GraphQL" />
                </a>
            </Link>
            <Link href="/products">
                <a className="header__link">Products</a>
            </Link>
            <Link href="/example">
                <a className="header__link">Example</a>
            </Link>
            <Link href="/about">
                <a className="header__link">About</a>
            </Link>
        </header>
    );
};
