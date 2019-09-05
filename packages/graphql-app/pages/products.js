import { App } from '../components/App';
import { ProductsList } from '../components/products-list/products-list';
import { withApollo } from '../lib/apollo';

const Products = () => (
    <App title="Products from BOL.com">
        <div className="content__section">
            <p>
                Example below is using the open API data from bol.com We use a
                trick to retrieve all data in list view for a product detail
                main page so the main part comes from the cache.
            </p>
            <h1>Products list</h1>
            <ProductsList />
        </div>
    </App>
);

export default withApollo(Products);
