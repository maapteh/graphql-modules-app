// import Link from 'next/link';
import {
    GetProductsComponent,
    GetProductsProducts,
} from '../../lib/_generated-components';
import Link from 'next/link';

export const ProductsList = () => (
    // Example generated component, you can also use Query from 'react-apollo' and use generated types only for autocomplete
    <GetProductsComponent variables={{ id: '38904' }} ssr={false}>
        {({ loading, error, data: { getProducts } }) => {
            if (error) return <div>error</div>;
            if (loading) return <div>Loading</div>;

            return (
                <section>
                    <ul>
                        {getProducts &&
                            getProducts.products &&
                            getProducts.products.map(
                                (product: GetProductsProducts) => {
                                    return (
                                        <li key={`${product.id}`}>
                                            <Link
                                                href={`/product?id=${
                                                    product.id
                                                }`}
                                            >
                                                <a>{product.title}</a>
                                            </Link>
                                        </li>
                                    );
                                },
                            )}
                    </ul>
                    <img
                        src="/static/bol.svg"
                        alt="BOL.com"
                        className="products__logo"
                        width="120"
                    />
                </section>
            );
        }}
    </GetProductsComponent>
);
