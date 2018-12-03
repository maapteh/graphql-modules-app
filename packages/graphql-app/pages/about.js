import App from '../components/App';
import { Header } from '../components/header/header';

export default () => (
  <App>
    <Header />
    <div className="content__section">
      <h1>Showcase GraphQL</h1>

      <p>NextJS is used because it gives a setup in which we can easily have an isomorphic application without too much code. This way we are able to focus on the GraphQL part.</p>

      <h2>GraphQL</h2>
      <ul>
        <li>TODO: example with Batched/non-batched queries (code is allready provided (by using context important) but no demo is created for it)</li>
        <li>SSR/client side rendering</li>
      </ul>

      <h3>Open api</h3>
      <p>This application is using the open api of schiphol.nl and bol.com at the moment.</p>

      <h2>graphql-modules.com</h2>
      <p><a href="https://graphql-modules.com/">graphql-modules.com</a></p>
    </div>
  </App>
);
