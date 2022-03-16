import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "react-query";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("http://localhost:5000/graphql", {
      method: "POST",
      ...{ headers: { "Content-Type": "application/json" } },
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
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
  __typename?: "Category";
  createdAt: Scalars["DateTime"];
  description: Scalars["String"];
  id: Scalars["Int"];
  name: Scalars["String"];
  products: Array<Product>;
  updatedAt: Scalars["DateTime"];
};

export type CreateCategoryInput = {
  description: Scalars["String"];
  name: Scalars["String"];
};

export type CreateProductInput = {
  categories: Array<Scalars["String"]>;
  description: Scalars["String"];
  images: Array<Scalars["String"]>;
  name: Scalars["String"];
  price: Scalars["Int"];
  quantity: Scalars["Int"];
  status: Scalars["String"];
  type: Scalars["String"];
};

export type GetCategoriesResponse = {
  __typename?: "GetCategoriesResponse";
  list: Array<Category>;
  total: Scalars["Int"];
};

export type GetProductsResponse = {
  __typename?: "GetProductsResponse";
  list: Array<Product>;
  total: Scalars["Int"];
};

export type Mutation = {
  __typename?: "Mutation";
  createCategory: Category;
  createProduct: Product;
  removeCategory: Scalars["Boolean"];
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
  id: Scalars["Int"];
};

export type MutationRemoveProductArgs = {
  id: Scalars["Int"];
};

export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};

export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput;
};

export type Product = {
  __typename?: "Product";
  categories: Array<Category>;
  createdAt: Scalars["DateTime"];
  description: Scalars["String"];
  id: Scalars["Float"];
  images: Array<ProductImage>;
  name: Scalars["String"];
  price: Scalars["Float"];
  quantity: Scalars["Float"];
  status: Scalars["String"];
  type: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type ProductImage = {
  __typename?: "ProductImage";
  id: Scalars["Float"];
  productId: Product;
  url: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  categories: GetCategoriesResponse;
  category: Category;
  product?: Maybe<Product>;
  products: GetProductsResponse;
};

export type QueryCategoriesArgs = {
  limit: Scalars["Float"];
  page: Scalars["Float"];
};

export type QueryCategoryArgs = {
  name: Scalars["String"];
};

export type QueryProductArgs = {
  id: Scalars["Int"];
};

export type QueryProductsArgs = {
  limit: Scalars["Float"];
  page: Scalars["Float"];
};

export type UpdateCategoryInput = {
  description?: InputMaybe<Scalars["String"]>;
  id: Scalars["Int"];
  name?: InputMaybe<Scalars["String"]>;
};

export type UpdateProductInput = {
  categories?: InputMaybe<Array<Scalars["String"]>>;
  description?: InputMaybe<Scalars["String"]>;
  id: Scalars["Int"];
  images?: InputMaybe<Array<Scalars["String"]>>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Int"]>;
  quantity?: InputMaybe<Scalars["Int"]>;
  status?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export type CreateCategoryMutationVariables = Exact<{
  createCategoryInput: CreateCategoryInput;
}>;

export type CreateCategoryMutation = {
  __typename?: "Mutation";
  createCategory: { __typename?: "Category"; name: string; id: number };
};

export type GetAllCategoryNameQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllCategoryNameQuery = {
  __typename?: "Query";
  categories: {
    __typename?: "GetCategoriesResponse";
    total: number;
    list: Array<{ __typename?: "Category"; id: number; name: string }>;
  };
};

export type GetCategoriesQueryVariables = Exact<{
  limit: Scalars["Float"];
  page: Scalars["Float"];
}>;

export type GetCategoriesQuery = {
  __typename?: "Query";
  categories: {
    __typename?: "GetCategoriesResponse";
    total: number;
    list: Array<{
      __typename?: "Category";
      id: number;
      name: string;
      createdAt: any;
      description: string;
    }>;
  };
};

export type RemoveCategoryMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type RemoveCategoryMutation = {
  __typename?: "Mutation";
  removeCategory: boolean;
};

export type CreateProductMutationVariables = Exact<{
  createProductInput: CreateProductInput;
}>;

export type CreateProductMutation = {
  __typename?: "Mutation";
  createProduct: { __typename?: "Product"; name: string; id: number };
};

export type GetPathsQueryVariables = Exact<{ [key: string]: never }>;

export type GetPathsQuery = {
  __typename?: "Query";
  products: {
    __typename?: "GetProductsResponse";
    list: Array<{ __typename?: "Product"; id: number; name: string }>;
  };
};

export type GetProductByIdQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type GetProductByIdQuery = {
  __typename?: "Query";
  product?: { __typename?: "Product"; name: string; id: number } | null;
};

export type GetProductsQueryVariables = Exact<{
  limit: Scalars["Float"];
  page: Scalars["Float"];
}>;

export type GetProductsQuery = {
  __typename?: "Query";
  products: {
    __typename?: "GetProductsResponse";
    total: number;
    list: Array<{
      __typename?: "Product";
      id: number;
      name: string;
      description: string;
      price: number;
      quantity: number;
      status: string;
      type: string;
      createdAt: any;
      categories: Array<{ __typename?: "Category"; name: string }>;
      images: Array<{ __typename?: "ProductImage"; url: string; id: number }>;
    }>;
  };
};

export const CreateCategoryDocument = `
    mutation CreateCategory($createCategoryInput: CreateCategoryInput!) {
  createCategory(createCategoryInput: $createCategoryInput) {
    name
    id
  }
}
    `;
export const useCreateCategoryMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateCategoryMutation,
    TError,
    CreateCategoryMutationVariables,
    TContext
  >
) =>
  useMutation<
    CreateCategoryMutation,
    TError,
    CreateCategoryMutationVariables,
    TContext
  >(
    ["CreateCategory"],
    (variables?: CreateCategoryMutationVariables) =>
      fetcher<CreateCategoryMutation, CreateCategoryMutationVariables>(
        CreateCategoryDocument,
        variables
      )(),
    options
  );
export const GetAllCategoryNameDocument = `
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
export const useGetAllCategoryNameQuery = <
  TData = GetAllCategoryNameQuery,
  TError = unknown
>(
  variables?: GetAllCategoryNameQueryVariables,
  options?: UseQueryOptions<GetAllCategoryNameQuery, TError, TData>
) =>
  useQuery<GetAllCategoryNameQuery, TError, TData>(
    variables === undefined
      ? ["getAllCategoryName"]
      : ["getAllCategoryName", variables],
    fetcher<GetAllCategoryNameQuery, GetAllCategoryNameQueryVariables>(
      GetAllCategoryNameDocument,
      variables
    ),
    options
  );
export const GetCategoriesDocument = `
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
export const useGetCategoriesQuery = <
  TData = GetCategoriesQuery,
  TError = unknown
>(
  variables: GetCategoriesQueryVariables,
  options?: UseQueryOptions<GetCategoriesQuery, TError, TData>
) =>
  useQuery<GetCategoriesQuery, TError, TData>(
    ["getCategories", variables],
    fetcher<GetCategoriesQuery, GetCategoriesQueryVariables>(
      GetCategoriesDocument,
      variables
    ),
    options
  );
export const RemoveCategoryDocument = `
    mutation RemoveCategory($id: Int!) {
  removeCategory(id: $id)
}
    `;
export const useRemoveCategoryMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    RemoveCategoryMutation,
    TError,
    RemoveCategoryMutationVariables,
    TContext
  >
) =>
  useMutation<
    RemoveCategoryMutation,
    TError,
    RemoveCategoryMutationVariables,
    TContext
  >(
    ["RemoveCategory"],
    (variables?: RemoveCategoryMutationVariables) =>
      fetcher<RemoveCategoryMutation, RemoveCategoryMutationVariables>(
        RemoveCategoryDocument,
        variables
      )(),
    options
  );
export const CreateProductDocument = `
    mutation CreateProduct($createProductInput: CreateProductInput!) {
  createProduct(createProductInput: $createProductInput) {
    name
    id
  }
}
    `;
export const useCreateProductMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateProductMutation,
    TError,
    CreateProductMutationVariables,
    TContext
  >
) =>
  useMutation<
    CreateProductMutation,
    TError,
    CreateProductMutationVariables,
    TContext
  >(
    ["CreateProduct"],
    (variables?: CreateProductMutationVariables) =>
      fetcher<CreateProductMutation, CreateProductMutationVariables>(
        CreateProductDocument,
        variables
      )(),
    options
  );
export const GetPathsDocument = `
    query getPaths {
  products(limit: 0, page: 0) {
    list {
      id
      name
    }
  }
}
    `;
export const useGetPathsQuery = <TData = GetPathsQuery, TError = unknown>(
  variables?: GetPathsQueryVariables,
  options?: UseQueryOptions<GetPathsQuery, TError, TData>
) =>
  useQuery<GetPathsQuery, TError, TData>(
    variables === undefined ? ["getPaths"] : ["getPaths", variables],
    fetcher<GetPathsQuery, GetPathsQueryVariables>(GetPathsDocument, variables),
    options
  );
export const GetProductByIdDocument = `
    query getProductById($id: Int!) {
  product(id: $id) {
    name
    id
  }
}
    `;
export const useGetProductByIdQuery = <
  TData = GetProductByIdQuery,
  TError = unknown
>(
  variables: GetProductByIdQueryVariables,
  options?: UseQueryOptions<GetProductByIdQuery, TError, TData>
) =>
  useQuery<GetProductByIdQuery, TError, TData>(
    ["getProductById", variables],
    fetcher<GetProductByIdQuery, GetProductByIdQueryVariables>(
      GetProductByIdDocument,
      variables
    ),
    options
  );
export const GetProductsDocument = `
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
export const useGetProductsQuery = <TData = GetProductsQuery, TError = unknown>(
  variables: GetProductsQueryVariables,
  options?: UseQueryOptions<GetProductsQuery, TError, TData>
) =>
  useQuery<GetProductsQuery, TError, TData>(
    ["getProducts", variables],
    fetcher<GetProductsQuery, GetProductsQueryVariables>(
      GetProductsDocument,
      variables
    ),
    options
  );
