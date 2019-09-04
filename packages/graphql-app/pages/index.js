import Link from 'next/link';
import { App } from '../components/App';

const IndexPage = () => (
    <App>
        <div className="content__section">
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
        </div>
    </App>
)

export default IndexPage;