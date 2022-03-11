import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  products: Array<Product>;
  updatedAt: Scalars['DateTime'];
};

export type CreateCategoryInput = {
  description: Scalars['String'];
  name: Scalars['String'];
};

export type CreateProductInput = {
  categories: Array<Scalars['String']>;
  description: Scalars['String'];
  images: Array<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Int'];
  quantity: Scalars['Int'];
  status: Scalars['String'];
  type: Scalars['String'];
};

export type GetCategoriesResponse = {
  __typename?: 'GetCategoriesResponse';
  list: Array<Category>;
  total: Scalars['Int'];
};

export type GetProductsResponse = {
  __typename?: 'GetProductsResponse';
  list: Array<Product>;
  total: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createProduct: Product;
  removeCategory: Scalars['Boolean'];
  removeProduct: Product;
  updateCategory: Category;
  updateProduct: Product;
};


export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationRemoveCategoryArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};


export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput;
};

export type Product = {
  __typename?: 'Product';
  categories: Array<Category>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Float'];
  images: Array<ProductImage>;
  name: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Float'];
  status: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductImage = {
  __typename?: 'ProductImage';
  id: Scalars['Float'];
  productId: Product;
  url: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  categories: GetCategoriesResponse;
  category: Category;
  product: Product;
  products: GetProductsResponse;
};


export type QueryCategoriesArgs = {
  limit: Scalars['Float'];
  page: Scalars['Float'];
};


export type QueryCategoryArgs = {
  name: Scalars['String'];
};


export type QueryProductArgs = {
  id: Scalars['Int'];
};


export type QueryProductsArgs = {
  limit: Scalars['Float'];
  page: Scalars['Float'];
};

export type UpdateCategoryInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateProductInput = {
  categories?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  images?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type CreateCategoryMutationVariables = Exact<{
  createCategoryInput: CreateCategoryInput;
}>;


export type CreateCategoryMutation = { __typename?: 'Mutation', createCategory: { __typename?: 'Category', name: string, id: number } };

export type GetAllCategoryNameQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoryNameQuery = { __typename?: 'Query', categories: { __typename?: 'GetCategoriesResponse', total: number, list: Array<{ __typename?: 'Category', id: number, name: string }> } };

export type GetCategoriesQueryVariables = Exact<{
  limit: Scalars['Float'];
  page: Scalars['Float'];
}>;


export type GetCategoriesQuery = { __typename?: 'Query', categories: { __typename?: 'GetCategoriesResponse', total: number, list: Array<{ __typename?: 'Category', id: number, name: string, createdAt: any, description: string }> } };

export type RemoveCategoryMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveCategoryMutation = { __typename?: 'Mutation', removeCategory: boolean };

export type CreateProductMutationVariables = Exact<{
  createProductInput: CreateProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', name: string, id: number } };

export type GetProductsQueryVariables = Exact<{
  limit: Scalars['Float'];
  page: Scalars['Float'];
}>;


export type GetProductsQuery = { __typename?: 'Query', products: { __typename?: 'GetProductsResponse', total: number, list: Array<{ __typename?: 'Product', id: number, name: string, description: string, price: number, quantity: number, status: string, type: string, createdAt: any, categories: Array<{ __typename?: 'Category', name: string }>, images: Array<{ __typename?: 'ProductImage', url: string, id: number }> }> } };


export const CreateCategoryDocument = gql`
    mutation CreateCategory($createCategoryInput: CreateCategoryInput!) {
  createCategory(createCategoryInput: $createCategoryInput) {
    name
    id
  }
}
    `;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      createCategoryInput: // value for 'createCategoryInput'
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const GetAllCategoryNameDocument = gql`
    query getAllCategoryName {
  categories(limit: 0, page: 0) {
    total
    list {
      id
      name
    }
  }
}
    `;

/**
 * __useGetAllCategoryNameQuery__
 *
 * To run a query within a React component, call `useGetAllCategoryNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoryNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoryNameQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCategoryNameQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoryNameQuery, GetAllCategoryNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoryNameQuery, GetAllCategoryNameQueryVariables>(GetAllCategoryNameDocument, options);
      }
export function useGetAllCategoryNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoryNameQuery, GetAllCategoryNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoryNameQuery, GetAllCategoryNameQueryVariables>(GetAllCategoryNameDocument, options);
        }
export type GetAllCategoryNameQueryHookResult = ReturnType<typeof useGetAllCategoryNameQuery>;
export type GetAllCategoryNameLazyQueryHookResult = ReturnType<typeof useGetAllCategoryNameLazyQuery>;
export type GetAllCategoryNameQueryResult = Apollo.QueryResult<GetAllCategoryNameQuery, GetAllCategoryNameQueryVariables>;
export const GetCategoriesDocument = gql`
    query getCategories($limit: Float!, $page: Float!) {
  categories(limit: $limit, page: $page) {
    total
    list {
      id
      name
      createdAt
      description
    }
  }
}
    `;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const RemoveCategoryDocument = gql`
    mutation RemoveCategory($id: Int!) {
  removeCategory(id: $id)
}
    `;
export type RemoveCategoryMutationFn = Apollo.MutationFunction<RemoveCategoryMutation, RemoveCategoryMutationVariables>;

/**
 * __useRemoveCategoryMutation__
 *
 * To run a mutation, you first call `useRemoveCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCategoryMutation, { data, loading, error }] = useRemoveCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveCategoryMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCategoryMutation, RemoveCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCategoryMutation, RemoveCategoryMutationVariables>(RemoveCategoryDocument, options);
      }
export type RemoveCategoryMutationHookResult = ReturnType<typeof useRemoveCategoryMutation>;
export type RemoveCategoryMutationResult = Apollo.MutationResult<RemoveCategoryMutation>;
export type RemoveCategoryMutationOptions = Apollo.BaseMutationOptions<RemoveCategoryMutation, RemoveCategoryMutationVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($createProductInput: CreateProductInput!) {
  createProduct(createProductInput: $createProductInput) {
    name
    id
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      createProductInput: // value for 'createProductInput'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const GetProductsDocument = gql`
    query getProducts($limit: Float!, $page: Float!) {
  products(limit: $limit, page: $page) {
    total
    list {
      id
      name
      description
      price
      quantity
      status
      type
      categories {
        name
      }
      images {
        url
        id
      }
      createdAt
    }
  }
}
    `;

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
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;