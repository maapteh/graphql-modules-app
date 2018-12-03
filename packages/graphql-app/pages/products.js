import App from '../components/App';
import {ProductsList} from '../components/products/products-list';

export default () => (
    <App title="Products">
        <div className="content__section">
            <ProductsList />
        </div>
    </App>
);
