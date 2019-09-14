import Head from 'next/head';
import { Header } from './header/header';
import style from './app.scss';

export const App = ({ children, title = 'GraphQL modules example' }: any) => (
    <div>
        <Head>
            <title>workshop GRAPHQL - {title}</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver" />
            <link rel="shortcut icon" href="/static/favicon.png" />
        </Head>
        <Header />
        <main className={style.section}>{children}</main>
    </div>
);
