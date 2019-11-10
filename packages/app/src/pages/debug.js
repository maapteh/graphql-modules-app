import { App } from '../modules/App';
import { withApollo } from '../graphql/apollo';
import { ProductComponent } from '../modules/product/product-component';

const Debug = () => (
    <App>
        {/* these components will be batched */}
        <ProductComponent
            id="9200000113065845"
            ssr={false}
            context={{ important: true }}
            short
        />
    </App>
);

export default withApollo(Debug);
