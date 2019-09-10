import Link from 'next/link';

type Props = {
    id: string;
    title: string;
};

export const ProductsListLink = ({ id, title }: Props) => {
    return (
        <Link href={`/product?id=${id}`} as={`/product/${id}`}>
            <a href={`/product/${id}`}>{title}</a>
        </Link>
    );
};
