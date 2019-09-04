import React from 'react';
import App from 'next/app';
import { withApollo } from '../lib/apollo';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />;
    }
}

export default withApollo(MyApp);
