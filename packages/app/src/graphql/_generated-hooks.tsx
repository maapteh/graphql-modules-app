/** eslint-disable */
/** AUTO GENERATED, DO NOT EDIT OVERHERE */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

/** Show Offer for a Product */
export type Offer = {
   __typename?: 'Offer',
  id: Scalars['String'],
  condition: Scalars['String'],
  price: Scalars['Float'],
  availabilityCode: Scalars['String'],
  availabilityDescription: Scalars['String'],
  seller: OfferSeller,
};

export type OfferSeller = {
   __typename?: 'OfferSeller',
  id: Scalars['String'],
  sellerType: Scalars['String'],
  displayName: Scalars['String'],
};

export type Product = {
   __typename?: 'Product',
  offer?: Maybe<Offer>,
  id: Scalars['String'],
  ean?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  specsTag?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  rating?: Maybe<Scalars['Int']>,
  shortDescription?: Maybe<Scalars['String']>,
  urls?: Maybe<Array<Maybe<ProductUrls>>>,
  images?: Maybe<Array<Maybe<ProductImage>>>,
  /** TODO: question does 'offerData' belong here? */
  offerData?: Maybe<ProductOfferData>,
  parentCategoryPaths?: Maybe<ProductParentCategoryPaths>,
};

export type ProductImage = {
   __typename?: 'ProductImage',
  type?: Maybe<Scalars['String']>,
  key?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type ProductOfferData = {
   __typename?: 'ProductOfferData',
  bolCom?: Maybe<Scalars['Int']>,
  nonProfessionalSellers?: Maybe<Scalars['Int']>,
  professionalSellers?: Maybe<Scalars['Int']>,
  offers?: Maybe<Array<Maybe<ProductOfferDataOffer>>>,
};

/** TODO: is this Offer? Schema usage validator should pick this up */
export type ProductOfferDataOffer = {
   __typename?: 'ProductOfferDataOffer',
  id: Scalars['String'],
  condition: Scalars['String'],
  price: Scalars['Float'],
  listPrice?: Maybe<Scalars['Float']>,
  availabilityCode: Scalars['String'],
  availabilityDescription: Scalars['String'],
  comment: Scalars['String'],
  seller: ProductSeller,
  bestOffer?: Maybe<Scalars['Boolean']>,
  releaseDate?: Maybe<Scalars['String']>,
};

export type ProductParentCategory = {
   __typename?: 'ProductParentCategory',
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type ProductParentCategoryPaths = {
   __typename?: 'ProductParentCategoryPaths',
  parentCategories?: Maybe<ProductParentCategory>,
};

/** Products for a specific category, model is taken as is from bol.com */
export type Products = {
   __typename?: 'Products',
  products?: Maybe<Array<Maybe<Product>>>,
  schemaVersion?: Maybe<Scalars['String']>,
  totalResultSize?: Maybe<Scalars['Int']>,
  originalRequest?: Maybe<ProductsOriginalRequest>,
};

export type ProductSeller = {
   __typename?: 'ProductSeller',
  id: Scalars['String'],
  sellerType: Scalars['String'],
  displayName: Scalars['String'],
  url?: Maybe<Scalars['String']>,
  topSeller: Scalars['Boolean'],
  useWarrantyRepairConditions: Scalars['Boolean'],
};

export type ProductsOriginalRequest = {
   __typename?: 'ProductsOriginalRequest',
  category?: Maybe<Array<Maybe<ProductsOriginalRequestCategory>>>,
};

export type ProductsOriginalRequestCategory = {
   __typename?: 'ProductsOriginalRequestCategory',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  productCount?: Maybe<Scalars['Int']>,
};

export type ProductUrls = {
   __typename?: 'ProductUrls',
  key?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  /** Get best offer for specific product */
  getOffer?: Maybe<Offer>,
  /** Get all products for a specific list */
  getProducts?: Maybe<Products>,
  /** Get single product */
  getProduct?: Maybe<Product>,
};


export type QueryGetOfferArgs = {
  id: Scalars['String']
};


export type QueryGetProductsArgs = {
  id: Scalars['String']
};


export type QueryGetProductArgs = {
  id: Scalars['String']
};

export type ProductFragment = (
  { __typename?: 'Product' }
  & Pick<Product, 'id' | 'title' | 'rating' | 'shortDescription'>
  & { images: Maybe<Array<Maybe<(
    { __typename?: 'ProductImage' }
    & Pick<ProductImage, 'key' | 'url'>
  )>>>, urls: Maybe<Array<Maybe<(
    { __typename?: 'ProductUrls' }
    & Pick<ProductUrls, 'key' | 'value'>
  )>>> }
);

export type GetOfferQueryVariables = {
  id: Scalars['String']
};


export type GetOfferQuery = (
  { __typename?: 'Query' }
  & { getOffer: Maybe<(
    { __typename?: 'Offer' }
    & Pick<Offer, 'id' | 'price' | 'availabilityDescription'>
    & { seller: (
      { __typename?: 'OfferSeller' }
      & Pick<OfferSeller, 'displayName'>
    ) }
  )> }
);

export type GetProductQueryVariables = {
  id: Scalars['String']
};


export type GetProductQuery = (
  { __typename?: 'Query' }
  & { getProduct: Maybe<(
    { __typename?: 'Product' }
    & ProductFragment
  )> }
);

export type GetProductsQueryVariables = {
  id: Scalars['String']
};


export type GetProductsQuery = (
  { __typename?: 'Query' }
  & { getProducts: Maybe<(
    { __typename?: 'Products' }
    & { products: Maybe<Array<Maybe<(
      { __typename?: 'Product' }
      & ProductFragment
    )>>> }
  )> }
);

export const ProductFragmentDoc = gql`
    fragment product on Product {
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
    `;
export const GetOfferDocument = gql`
    query getOffer($id: String!) {
  getOffer(id: $id) {
    id
    price
    availabilityDescription
    seller {
      displayName
    }
  }
}
    `;

/**
 * __useGetOfferQuery__
 *
 * To run a query within a React component, call `useGetOfferQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOfferQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOfferQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOfferQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetOfferQuery, GetOfferQueryVariables>) {
        return ApolloReactHooks.useQuery<GetOfferQuery, GetOfferQueryVariables>(GetOfferDocument, baseOptions);
      }
export function useGetOfferLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOfferQuery, GetOfferQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetOfferQuery, GetOfferQueryVariables>(GetOfferDocument, baseOptions);
        }
export type GetOfferQueryHookResult = ReturnType<typeof useGetOfferQuery>;
export type GetOfferLazyQueryHookResult = ReturnType<typeof useGetOfferLazyQuery>;
export type GetOfferQueryResult = ApolloReactCommon.QueryResult<GetOfferQuery, GetOfferQueryVariables>;
export const GetProductDocument = gql`
    query getProduct($id: String!) {
  getProduct(id: $id) {
    ...product
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, baseOptions);
      }
export function useGetProductLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, baseOptions);
        }
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<typeof useGetProductLazyQuery>;
export type GetProductQueryResult = ApolloReactCommon.QueryResult<GetProductQuery, GetProductQueryVariables>;
export const GetProductsDocument = gql`
    query getProducts($id: String!) {
  getProducts(id: $id) {
    products {
      ...product
    }
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, baseOptions);
      }
export function useGetProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, baseOptions);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = ApolloReactCommon.QueryResult<GetProductsQuery, GetProductsQueryVariables>;