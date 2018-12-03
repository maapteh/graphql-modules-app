import App from '../components/App';
import Link from 'next/link';

import { Header } from '../components/header/header';
import { FlightsList } from '../components/flights-list/flights-list';

export default () => (
  <App>
    <Header />
    <div className="content__section">
      <h1>GraphQL modules example</h1>

      <p>
        <Link prefetch href="/flights"><a>flights</a></Link>: schiphol.com open api data</p>
      <p>
        <Link prefetch href="/products"><a>products</a></Link>: bol.com open api data</p>


    </div>
  </App>
);
