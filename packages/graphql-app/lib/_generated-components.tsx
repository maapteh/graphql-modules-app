/* tslint:disable */
/* auto generated do not edit */

export enum CacheControlScope {
    Public = 'PUBLIC',
    Private = 'PRIVATE',
}

// ====================================================
// Documents
// ====================================================

export type GetProductVariables = {
    id: string;
};

export type GetProductQuery = {
    __typename?: 'Query';

    getProduct: GetProductGetProduct | null;
};

export type GetProductGetProduct = {
    __typename?: 'Product';

    id: string | null;

    title: string | null;

    rating: number | null;

    shortDescription: string | null;

    images: GetProductImages[] | null;

    urls: GetProductUrls[] | null;
};

export type GetProductImages = {
    __typename?: 'ProductImages';

    key: string | null;

    url: string | null;
};

export type GetProductUrls = {
    __typename?: 'ProductUrls';

    key: string | null;

    value: string | null;
};

export type GetProductsVariables = {
    id: string;
};

export type GetProductsQuery = {
    __typename?: 'Query';

    getProducts: GetProductsGetProducts | null;
};

export type GetProductsGetProducts = {
    __typename?: 'Products';

    products: GetProductsProducts[] | null;
};

export type GetProductsProducts = {
    __typename?: 'Product';

    id: string | null;

    title: string | null;

    shortDescription: string | null;

    images: GetProductsImages[] | null;

    urls: GetProductsUrls[] | null;
};

export type GetProductsImages = {
    __typename?: 'ProductImages';

    key: string | null;

    url: string | null;
};

export type GetProductsUrls = {
    __typename?: 'ProductUrls';

    key: string | null;

    value: string | null;
};

import * as ReactApollo from 'react-apollo';
import * as React from 'react';

import gql from 'graphql-tag';

// ====================================================
// Components
// ====================================================

export const GetProductDocument = gql`
    query getProduct($id: String!) {
        getProduct(id: $id) {
            id
            title
            rating
            shortDescription
            images {
                key
                url
            }
            urls {
                key
                value
            }
        }
    }
`;
export class GetProductComponent extends React.Component<
    Partial<ReactApollo.QueryProps<GetProductQuery, GetProductVariables>>
> {
    render() {
        return (
            <ReactApollo.Query<GetProductQuery, GetProductVariables>
                query={GetProductDocument}
                {...(this as any)['props'] as any}
            />
        );
    }
}
export type GetProductProps<TChildProps = any> = Partial<
    ReactApollo.DataProps<GetProductQuery, GetProductVariables>
> &
    TChildProps;
export function GetProductHOC<TProps, TChildProps = any>(
    operationOptions:
        | ReactApollo.OperationOption<
              TProps,
              GetProductQuery,
              GetProductVariables,
              GetProductProps<TChildProps>
          >
        | undefined,
) {
    return ReactApollo.graphql<
        TProps,
        GetProductQuery,
        GetProductVariables,
        GetProductProps<TChildProps>
    >(GetProductDocument, operationOptions);
}
export const GetProductsDocument = gql`
    query getProducts($id: String!) {
        getProducts(id: $id) {
            products {
                id
                title
                shortDescription
                images {
                    key
                    url
                }
                urls {
                    key
                    value
                }
            }
        }
    }
`;
export class GetProductsComponent extends React.Component<
    Partial<ReactApollo.QueryProps<GetProductsQuery, GetProductsVariables>>
> {
    render() {
        return (
            <ReactApollo.Query<GetProductsQuery, GetProductsVariables>
                query={GetProductsDocument}
                {...(this as any)['props'] as any}
            />
        );
    }
}
export type GetProductsProps<TChildProps = any> = Partial<
    ReactApollo.DataProps<GetProductsQuery, GetProductsVariables>
> &
    TChildProps;
export function GetProductsHOC<TProps, TChildProps = any>(
    operationOptions:
        | ReactApollo.OperationOption<
              TProps,
              GetProductsQuery,
              GetProductsVariables,
              GetProductsProps<TChildProps>
          >
        | undefined,
) {
    return ReactApollo.graphql<
        TProps,
        GetProductsQuery,
        GetProductsVariables,
        GetProductsProps<TChildProps>
    >(GetProductsDocument, operationOptions);
}
