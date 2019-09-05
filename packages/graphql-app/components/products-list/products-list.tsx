import Link from 'next/link';
import { useGetProductsQuery, Product } from '../../lib/_generated-types';

export const ProductsList = () => {
    const { data, loading } = useGetProductsQuery({
        variables: { id: '38904' },
    });

    return (
        <section>
            {loading && <div>loading products...</div>}
            <ul>
                {data.getProducts &&
                    data.getProducts.products &&
                    data.getProducts.products.map((product: Product) => {
                        return (
                            <li key={`${product.id}`}>
                                <Link
                                    href={{
                                        pathname: '/product',
                                        query: { id: product.id },
                                    }}
                                    as={`/product/${product.id}`}
                                >
                                    <a>{product.title}</a>
                                </Link>
                            </li>
                        );
                    })}
            </ul>
            <img
                src="/static/bol.svg"
                alt="BOL.com"
                className="products__logo"
                width="120"
            />
        </section>
    );
};
