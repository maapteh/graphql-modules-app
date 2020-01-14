/* @ts-ignore */
/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };

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



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Offer: ResolverTypeWrapper<Offer>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  OfferSeller: ResolverTypeWrapper<OfferSeller>,
  Products: ResolverTypeWrapper<Products>,
  Product: ResolverTypeWrapper<Product>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  ProductUrls: ResolverTypeWrapper<ProductUrls>,
  ProductImage: ResolverTypeWrapper<ProductImage>,
  ProductOfferData: ResolverTypeWrapper<ProductOfferData>,
  ProductOfferDataOffer: ResolverTypeWrapper<ProductOfferDataOffer>,
  ProductSeller: ResolverTypeWrapper<ProductSeller>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  ProductParentCategoryPaths: ResolverTypeWrapper<ProductParentCategoryPaths>,
  ProductParentCategory: ResolverTypeWrapper<ProductParentCategory>,
  ProductsOriginalRequest: ResolverTypeWrapper<ProductsOriginalRequest>,
  ProductsOriginalRequestCategory: ResolverTypeWrapper<ProductsOriginalRequestCategory>,
  CacheControlScope: CacheControlScope,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  Offer: Offer,
  Float: Scalars['Float'],
  OfferSeller: OfferSeller,
  Products: Products,
  Product: Product,
  Int: Scalars['Int'],
  ProductUrls: ProductUrls,
  ProductImage: ProductImage,
  ProductOfferData: ProductOfferData,
  ProductOfferDataOffer: ProductOfferDataOffer,
  ProductSeller: ProductSeller,
  Boolean: Scalars['Boolean'],
  ProductParentCategoryPaths: ProductParentCategoryPaths,
  ProductParentCategory: ProductParentCategory,
  ProductsOriginalRequest: ProductsOriginalRequest,
  ProductsOriginalRequestCategory: ProductsOriginalRequestCategory,
  CacheControlScope: CacheControlScope,
};

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = {   maxAge?: Maybe<Maybe<Scalars['Int']>>,
  scope?: Maybe<Maybe<CacheControlScope>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type OfferResolvers<ContextType = any, ParentType extends ResolversParentTypes['Offer'] = ResolversParentTypes['Offer']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  condition?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  availabilityCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  availabilityDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  seller?: Resolver<ResolversTypes['OfferSeller'], ParentType, ContextType>,
};

export type OfferSellerResolvers<ContextType = any, ParentType extends ResolversParentTypes['OfferSeller'] = ResolversParentTypes['OfferSeller']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  sellerType?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  offer?: Resolver<Maybe<ResolversTypes['Offer']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  ean?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  specsTag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  shortDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  urls?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductUrls']>>>, ParentType, ContextType>,
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductImage']>>>, ParentType, ContextType>,
  offerData?: Resolver<Maybe<ResolversTypes['ProductOfferData']>, ParentType, ContextType>,
  parentCategoryPaths?: Resolver<Maybe<ResolversTypes['ProductParentCategoryPaths']>, ParentType, ContextType>,
};

export type ProductImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductImage'] = ResolversParentTypes['ProductImage']> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ProductOfferDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOfferData'] = ResolversParentTypes['ProductOfferData']> = {
  bolCom?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  nonProfessionalSellers?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  professionalSellers?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  offers?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductOfferDataOffer']>>>, ParentType, ContextType>,
};

export type ProductOfferDataOfferResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOfferDataOffer'] = ResolversParentTypes['ProductOfferDataOffer']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  condition?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  listPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  availabilityCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  availabilityDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  seller?: Resolver<ResolversTypes['ProductSeller'], ParentType, ContextType>,
  bestOffer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  releaseDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ProductParentCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductParentCategory'] = ResolversParentTypes['ProductParentCategory']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ProductParentCategoryPathsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductParentCategoryPaths'] = ResolversParentTypes['ProductParentCategoryPaths']> = {
  parentCategories?: Resolver<Maybe<ResolversTypes['ProductParentCategory']>, ParentType, ContextType>,
};

export type ProductsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Products'] = ResolversParentTypes['Products']> = {
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>,
  schemaVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  totalResultSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  originalRequest?: Resolver<Maybe<ResolversTypes['ProductsOriginalRequest']>, ParentType, ContextType>,
};

export type ProductSellerResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductSeller'] = ResolversParentTypes['ProductSeller']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  sellerType?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  topSeller?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  useWarrantyRepairConditions?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
};

export type ProductsOriginalRequestResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsOriginalRequest'] = ResolversParentTypes['ProductsOriginalRequest']> = {
  category?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductsOriginalRequestCategory']>>>, ParentType, ContextType>,
};

export type ProductsOriginalRequestCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsOriginalRequestCategory'] = ResolversParentTypes['ProductsOriginalRequestCategory']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  productCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type ProductUrlsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductUrls'] = ResolversParentTypes['ProductUrls']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getOffer?: Resolver<Maybe<ResolversTypes['Offer']>, ParentType, ContextType, RequireFields<QueryGetOfferArgs, 'id'>>,
  getProducts?: Resolver<Maybe<ResolversTypes['Products']>, ParentType, ContextType, RequireFields<QueryGetProductsArgs, 'id'>>,
  getProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryGetProductArgs, 'id'>>,
};

export type Resolvers<ContextType = any> = {
  Offer?: OfferResolvers<ContextType>,
  OfferSeller?: OfferSellerResolvers<ContextType>,
  Product?: ProductResolvers<ContextType>,
  ProductImage?: ProductImageResolvers<ContextType>,
  ProductOfferData?: ProductOfferDataResolvers<ContextType>,
  ProductOfferDataOffer?: ProductOfferDataOfferResolvers<ContextType>,
  ProductParentCategory?: ProductParentCategoryResolvers<ContextType>,
  ProductParentCategoryPaths?: ProductParentCategoryPathsResolvers<ContextType>,
  Products?: ProductsResolvers<ContextType>,
  ProductSeller?: ProductSellerResolvers<ContextType>,
  ProductsOriginalRequest?: ProductsOriginalRequestResolvers<ContextType>,
  ProductsOriginalRequestCategory?: ProductsOriginalRequestCategoryResolvers<ContextType>,
  ProductUrls?: ProductUrlsResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>,
};


/**
* @deprecated
* Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
*/
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;