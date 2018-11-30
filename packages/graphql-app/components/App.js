import Head from 'next/head';
import './app.scss';

export default ({children}) => (
    <div>
        <Head>
            <title>APOLLO GRAPHQL - flights</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="shortcut icon" href="/static/favicon.png"/>
        </Head>
        <main>{children}</main>
    </div>
);
