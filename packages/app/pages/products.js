import { withApollo } from '../lib/apollo';
import { App } from '../components/App';
import { ProductsList } from '../components/products-list/products-list';
import { ProductComponent } from '../components/product/product-component';

const Products = () => (
    <App title="Products from BOL.com">
        <p>
            Example below is using the open API data from bol.com We use
            'apollo-cache-inmemory' in the client when retrieving all data in
            list view, so main product details are there allready (for example
            image) when switching route.
        </p>
        <h1>Products list</h1>
        <ProductsList />

        <ProductComponent id="9200000113065845" ssr={true} short />
    </App>
);

export default withApollo(Products);
