import {
    useGetProductsQuery,
    ProductFragment,
} from '../../graphql/_generated-hooks';
import { LogoBol } from '../../elements/logo-bol/logo-bol';
import { ProductsListLink } from './elements/link/products-list-link';
import styles from './products-list.scss';

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

    const products = data && data.getProducts && data.getProducts.products;

    return (
        <section>
            {loading && <div>loading products...</div>}
            <ul>
                {products &&
                    products.length &&
                    products.map((product: ProductFragment) => {
                        const { id: ID, title } = product;

                        return (
                            <li key={`${ID}`} className={styles.item}>
                                <ProductsListLink id={ID} title={title} />
                            </li>
                        );
                    })}
            </ul>
            <LogoBol />
        </section>
    );
};
