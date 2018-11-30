import App from '../components/App';
import { Header } from '../components/header/header';

export default () => (
  <App>
    <Header />
    <div className="content__section">
      <h1>Showcase GraphQL</h1>
      <p>NextJS is used because it gives a setup in which we can easily have an isomorphic application without too much code. This way we are able to focus on the GraphQL part.</p>

      <h2>GraphQL</h2>
      <p>Batched/non-batched queries</p>
      <p>SSR/client side rendering</p>

      <h3>Open api SCHIPHOL</h3>
      <p>The Schiphol flight information is managed by the airlines and airline handlers in the Central Information System Schiphol ( CISS ). Part of this flight information is made available via the Rest API Flight Information (API) to developers.</p>
      https://developer.schiphol.nl/apis/flight-api/overview?version=v3
    </div>
  </App>
);
