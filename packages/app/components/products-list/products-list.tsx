import Link from 'next/link';
import { useGetProductsQuery, Product } from '../../lib/_generated-hooks';
import style from './products-list.scss';

const categories = ['38904', '37890', '3136+4278337614'];
const choosen = categories[Math.floor(Math.random() * categories.length)];

type Props = {
    id?: string;
};

export const ProductsList = ({ id = choosen }: Props) => {
    const { data, loading } = useGetProductsQuery({
        variables: {
            id,
        },
        ssr: false,
    });

    return (
        <section>
            {loading && <div>loading products...</div>}
            <ul>
                {data &&
                    data.getProducts &&
                    data.getProducts.products &&
                    data.getProducts.products.map((product: Product) => {
                        return (
                            <li key={`${product.id}`} className={style.item}>
                                <Link
                                    href={`/product?id=${product.id}`}
                                    as={`/product/${product.id}`}
                                >
                                    <a href={`/product?id=${product.id}`}>
                                        {product.title}
                                    </a>
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
