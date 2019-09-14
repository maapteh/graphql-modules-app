/** eslint-disable */
/** AUTO GENERATED, DO NOT EDIT OVERHERE */
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

export type Product = {
   __typename?: 'Product',
  id: Scalars['String'],
  ean?: Maybe<Scalars['String']>,
  title: Scalars['String'],
  specsTag?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  rating?: Maybe<Scalars['Int']>,
  shortDescription?: Maybe<Scalars['String']>,
  urls?: Maybe<Array<Maybe<ProductUrls>>>,
  images?: Maybe<Array<Maybe<ProductImage>>>,
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
  offers?: Maybe<ProductOfferDataOffers>,
};

export type ProductOfferDataOffers = {
   __typename?: 'ProductOfferDataOffers',
  id?: Maybe<Scalars['String']>,
  condition?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Int']>,
  listPrice?: Maybe<Scalars['Float']>,
  availabilityCode?: Maybe<Scalars['String']>,
  availabilityDescription?: Maybe<Scalars['String']>,
  comment?: Maybe<Scalars['String']>,
  seller?: Maybe<ProductSeller>,
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
  id?: Maybe<Scalars['String']>,
  sellerType?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  topSeller?: Maybe<Scalars['Boolean']>,
  useWarrantyRepairConditions?: Maybe<Scalars['Boolean']>,
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
  /** Get all products for a specific list */
  getProducts?: Maybe<Products>,
  /** Get single product */
  getProduct?: Maybe<Product>,
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

export type GetProductQueryVariables = {
  id: Scalars['String']
};


export type GetProductQuery = (
  { __typename?: 'Query' }
  & { getProduct: Maybe<{ __typename?: 'Product' }
    & ProductFragment
  > }
);

export type GetProductsQueryVariables = {
  id: Scalars['String']
};


export type GetProductsQuery = (
  { __typename?: 'Query' }
  & { getProducts: Maybe<(
    { __typename?: 'Products' }
    & { products: Maybe<Array<Maybe<{ __typename?: 'Product' }
      & ProductFragment
    >>> }
  )> }
);
