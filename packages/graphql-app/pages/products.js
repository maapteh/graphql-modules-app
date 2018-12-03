import App from '../components/App';
import { Header } from '../components/header/header';
import { ProductsList } from '../components/products/products-list';

export default () => (
  <App>
    <Header />
    <div className="content__section">
      <ProductsList />
    </div>
  </App>
);
