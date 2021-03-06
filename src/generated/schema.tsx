import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type IImage = {
   __typename?: 'Image';
  source: Scalars['String'];
  thumb: Scalars['String'];
};

export type IBlogPost = {
   __typename?: 'BlogPost';
  id: Scalars['String'];
  title: Scalars['String'];
  createdTime: Scalars['String'];
  body: Scalars['String'];
};

export type IQuery = {
   __typename?: 'Query';
  helloWorld: Scalars['String'];
  images?: Maybe<Array<Maybe<IImage>>>;
  posts?: Maybe<Array<Maybe<IBlogPost>>>;
  post?: Maybe<IBlogPost>;
};


export type IQueryPostArgs = {
  id: Scalars['String'];
};

export type IGetAllImagesQueryVariables = {};


export type IGetAllImagesQuery = (
  { __typename?: 'Query' }
  & { images?: Maybe<Array<Maybe<(
    { __typename?: 'Image' }
    & Pick<IImage, 'source' | 'thumb'>
  )>>> }
);

export type IGetAllBlogPostsQueryVariables = {};


export type IGetAllBlogPostsQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'BlogPost' }
    & Pick<IBlogPost, 'id' | 'title' | 'createdTime' | 'body'>
  )>>> }
);

export type IGetBlogPostByIdQueryVariables = {
  id: Scalars['String'];
};


export type IGetBlogPostByIdQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'BlogPost' }
    & Pick<IBlogPost, 'title' | 'createdTime' | 'body'>
  )> }
);


export const GetAllImagesDocument = gql`
    query getAllImages {
  images {
    source
    thumb
  }
}
    `;

/**
 * __useGetAllImagesQuery__
 *
 * To run a query within a React component, call `useGetAllImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllImagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllImagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IGetAllImagesQuery, IGetAllImagesQueryVariables>) {
        return ApolloReactHooks.useQuery<IGetAllImagesQuery, IGetAllImagesQueryVariables>(GetAllImagesDocument, baseOptions);
      }
export function useGetAllImagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IGetAllImagesQuery, IGetAllImagesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IGetAllImagesQuery, IGetAllImagesQueryVariables>(GetAllImagesDocument, baseOptions);
        }
export type GetAllImagesQueryHookResult = ReturnType<typeof useGetAllImagesQuery>;
export type GetAllImagesLazyQueryHookResult = ReturnType<typeof useGetAllImagesLazyQuery>;
export type GetAllImagesQueryResult = ApolloReactCommon.QueryResult<IGetAllImagesQuery, IGetAllImagesQueryVariables>;
export const GetAllBlogPostsDocument = gql`
    query getAllBlogPosts {
  posts {
    id
    title
    createdTime
    body
  }
}
    `;

/**
 * __useGetAllBlogPostsQuery__
 *
 * To run a query within a React component, call `useGetAllBlogPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBlogPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBlogPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBlogPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IGetAllBlogPostsQuery, IGetAllBlogPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<IGetAllBlogPostsQuery, IGetAllBlogPostsQueryVariables>(GetAllBlogPostsDocument, baseOptions);
      }
export function useGetAllBlogPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IGetAllBlogPostsQuery, IGetAllBlogPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IGetAllBlogPostsQuery, IGetAllBlogPostsQueryVariables>(GetAllBlogPostsDocument, baseOptions);
        }
export type GetAllBlogPostsQueryHookResult = ReturnType<typeof useGetAllBlogPostsQuery>;
export type GetAllBlogPostsLazyQueryHookResult = ReturnType<typeof useGetAllBlogPostsLazyQuery>;
export type GetAllBlogPostsQueryResult = ApolloReactCommon.QueryResult<IGetAllBlogPostsQuery, IGetAllBlogPostsQueryVariables>;
export const GetBlogPostByIdDocument = gql`
    query getBlogPostById($id: String!) {
  post(id: $id) {
    title
    createdTime
    body
  }
}
    `;

/**
 * __useGetBlogPostByIdQuery__
 *
 * To run a query within a React component, call `useGetBlogPostByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogPostByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogPostByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBlogPostByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IGetBlogPostByIdQuery, IGetBlogPostByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<IGetBlogPostByIdQuery, IGetBlogPostByIdQueryVariables>(GetBlogPostByIdDocument, baseOptions);
      }
export function useGetBlogPostByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IGetBlogPostByIdQuery, IGetBlogPostByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IGetBlogPostByIdQuery, IGetBlogPostByIdQueryVariables>(GetBlogPostByIdDocument, baseOptions);
        }
export type GetBlogPostByIdQueryHookResult = ReturnType<typeof useGetBlogPostByIdQuery>;
export type GetBlogPostByIdLazyQueryHookResult = ReturnType<typeof useGetBlogPostByIdLazyQuery>;
export type GetBlogPostByIdQueryResult = ApolloReactCommon.QueryResult<IGetBlogPostByIdQuery, IGetBlogPostByIdQueryVariables>;