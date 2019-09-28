import { App } from '../src/modules/App';
import { withApollo } from '../src/graphql/apollo';
import { ProductComponent } from '../src/modules/product/product-component';

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
