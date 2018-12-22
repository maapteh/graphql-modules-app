import Head from 'next/head';
import { Header } from './header/header';
import './app.scss';

export default ({ children, title = 'GraphQL modules example' }) => (
    <div>
        <Head>
            <title>APOLLO GRAPHQL - {title}</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <link rel="shortcut icon" href="/static/favicon.png" />
        </Head>
        <Header />
        <main>{children}</main>
    </div>
);
