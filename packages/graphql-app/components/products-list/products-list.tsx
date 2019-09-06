import Link from 'next/link';
import { useGetProductsQuery, Product } from '../../lib/_generated-types';

export const ProductsList = () => {
    const { data, loading } = useGetProductsQuery({
        variables: {
            // fixed category: PS4 games
            id: '38904',
        },
        ssr: false,
    });

    return (
        <section>
            {loading && <div>loading products...</div>}
            <ul>
                {data && data.getProducts &&
                    data.getProducts.products &&
                    data.getProducts.products.map((product: Product) => {
                        return (
                            <li key={`${product.id}`}>
                                <Link
                                    href={`/product?id=${product.id}`}
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
