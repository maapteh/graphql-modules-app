import { App } from '../src/modules/App';
import { withApollo } from '../src/graphql/apollo';
import { ProductComponent } from '../src/modules/product/product-component';

const Example = () => (
    <App>
        <h1>GraphQL Modules</h1>

        <h2>React client with auto generated Apollo Hooks</h2>
        <p>
            Example with Batched/non-batched queries and non SSR option. On this
            demonstration page the first product is rendered with SSR. The
            second is rendered in the main client call and the third is
            debatched so not in the main client call.
        </p>
        <p>
            When you came from the &apos;products&apos; page everything is
            retrieved from the cache so nothing is retrieved. For the
            demonstration effect just reload this page.
        </p>

        <ProductComponent id="9200000111963040" ssr short />

        <ProductComponent id="9200000113065845" ssr={false} short />

        {/* debatch non ssr test, by default everything is batched but easy to debatch when you expect the server to be slow */}
        <ProductComponent
            id="9200000113944705"
            ssr={false}
            context={{ important: true }}
            short
        />

        <h2>React server</h2>
        <p>
            Because we have dataloader in place the server will combine both
            product calls into one.
        </p>

        <p>
            <i>
                This application is using the free open api of{' '}
                <a href="https://bol.com">bol.com</a> at the moment for the
                products part. Some other parts will have mocked data so without
                a key you can still play arround.
            </i>
        </p>
    </App>
);

export default withApollo(Example);
