import { withApollo } from '../lib/apollo';
import { App } from '../components/App';
import { ProductsList } from '../components/products-list/products-list';

const Products = () => (
    <App title="Products from BOL.com">
        <p>
            Example below is using the open API data from bol.com We use
            &apos;apollo-cache-inmemory&apos; in the client when retrieving all
            data in list view, so main product details are there allready (for
            example image) when switching route.
        </p>
        <h1>Products list</h1>
        <ProductsList />
    </App>
);

export default withApollo(Products);
