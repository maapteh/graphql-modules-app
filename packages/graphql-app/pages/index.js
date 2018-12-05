import App from '../components/App';
import Link from 'next/link';

export default () => (
    <App>
        <div className="content__section">
            <h1>GraphQL modules example</h1>

            <p>
                <Link prefetch href="/products">
                    <a>products</a>
                </Link>
                : bol.com open api data
            </p>
        </div>
    </App>
);
