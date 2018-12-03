import React from 'react';
import Link from 'next/link';

import './header.scss';

export const Header = () => {
  return (
    <header className="header">

      <Link prefetch href="/">
        <a><img
        src="/static/logo.svg"
        alt="Apollo GraphQL"
        className="header__logo"
      /></a>
      </Link>
      <Link prefetch href="/flights">
        <a className="header__link">Flights</a>
      </Link>
      <Link prefetch href="/products">
        <a className="header__link">Products</a>
      </Link>
      <Link prefetch href="/about">
        <a className="header__link">About</a>
      </Link>
    </header>
  );
};
