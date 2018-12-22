import App from '../components/App';
import { ProductsList } from '../components/products/products-list';
import { Product } from '../components/product/product';

export default () => (
    <App title="Products from BOL.com">
        <div className="content__section">
            <ProductsList />
            <Product id="9200000094361918" ssr={true} />
        </div>
    </App>
);
