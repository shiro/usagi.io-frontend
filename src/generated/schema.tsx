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

export type IQuery = {
   __typename?: 'Query';
  helloWorld: Scalars['String'];
  images?: Maybe<Array<Maybe<IImage>>>;
};

export type IUnnamed_1_QueryVariables = {};


export type IUnnamed_1_Query = (
  { __typename?: 'Query' }
  & { images?: Maybe<Array<Maybe<(
    { __typename?: 'Image' }
    & Pick<IImage, 'source' | 'thumb'>
  )>>> }
);

export type IGetAllImagesQueryVariables = {};


export type IGetAllImagesQuery = (
  { __typename?: 'Query' }
  & { images?: Maybe<Array<Maybe<(
    { __typename?: 'Image' }
    & Pick<IImage, 'source' | 'thumb'>
  )>>> }
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