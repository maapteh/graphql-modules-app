import React from 'react';
import Link from 'next/link';

import './header.scss';

export const Header = () => {
  return (
    <header className="header">
      <img
        src="/static/schiphol.svg"
        alt="Schiphol"
        className="header__logo"
      />
      <Link prefetch href="/">
        <a className="header__link">Home</a>
      </Link>
      <Link prefetch href="/about">
        <a className="header__link">About</a>
      </Link>
    </header>
  );
};
