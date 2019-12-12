import InView from '@mpth/react-in-view';
import { App } from '../modules/App';
import { withApollo } from '../graphql/apollo';
import { ProductComponent } from '../modules/product/product-component';
import { ProductPlaceholder } from '../modules/product/elements/product-details/product-placeholder';
import style from '../modules/lazy.module.scss';

const Lazy = () => (
    <App>
        <div>
            <h1>Lazy loading</h1>
            <p>
                For a demonstration effect our containers are made 100% of the
                viewport height. You will notice that the first component is
                rendered server side. We know for sure the user will wanting to
                see it. Now every other component will only be painted when it
                comes into our view. At some moment before this ocurs the data
                will be loaded and painting the component.
            </p>
            <p>
                This performance trick makes our page response time faster (and
                also more throughput per seconds since we will have less initial
                state). Our user will not really notice it.
            </p>
        </div>

        {/* ssr component */}
        <ProductComponent id="9200000113944705" ssr short />

        {/* non ssr component, render only when in view */}
        <InView fallback={<ProductPlaceholder />}>
            <ProductComponent id="9200000113065845" ssr={false} short />
        </InView>

        <div className={style.root} />

        {/* non ssr component, render only when in view */}
        <InView fallback={<ProductPlaceholder />}>
            <ProductComponent id="9200000111963040" ssr={false} short />
        </InView>

        <div className={style.root} />

        {/* non ssr component, render only when in view */}
        <InView fallback={<ProductPlaceholder />}>
            <ProductComponent id="9200000103388809" ssr={false} short />
        </InView>
    </App>
);

export default withApollo(Lazy);
