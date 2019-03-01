import App from '../components/App';
import Link from 'next/link';

export default () => (
    <App>
        <div className="content__section">
            <h1>GraphQL modules example</h1>

            <p>Bol.com open api samples</p>
            <ul>
                <li>
                    <Link prefetch href="/products">
                        <a>products</a>
                    </Link>
                </li>
                <li>
                    <Link href="/example">
                        <a>example</a>
                    </Link>
                </li>
            </ul>
        </div>
    </App>
);
