import Link from 'next/link';
import { App } from '../components/App';
import { withApollo } from '../lib/apollo';

const IndexPage = () => (
    <App>
        <h1>GraphQL modules example</h1>

        <p>Bol.com open api samples</p>
        <ul>
            <li>
                <Link href="/products">
                    <a>products</a>
                </Link>
            </li>
            <li>
                <Link href="/example">
                    <a>example</a>
                </Link>
            </li>
        </ul>
    </App>
);

export default withApollo(IndexPage);
