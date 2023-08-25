/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any; }
  /**
   * Leverages the internal Python implementation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: { input: any; output: any; }
};

export type AuthorType = {
  __typename?: 'AuthorType';
  affiliation?: Maybe<Scalars['String']['output']>;
  citations: Scalars['Int']['output'];
  hIndex: Scalars['Int']['output'];
  i10Index: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  interests?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  paperSet: Array<PaperType>;
  profileUrl: Scalars['String']['output'];
};

export type CreateAuthor = {
  __typename?: 'CreateAuthor';
  author?: Maybe<AuthorType>;
};

export type CreateAuthorInput = {
  affiliation?: InputMaybe<Scalars['String']['input']>;
  citations?: InputMaybe<Scalars['Int']['input']>;
  hIndex?: InputMaybe<Scalars['Int']['input']>;
  i10Index?: InputMaybe<Scalars['Int']['input']>;
  interests?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profileUrl?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteAuthor = {
  __typename?: 'DeleteAuthor';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor?: Maybe<CreateAuthor>;
  deleteAuthor?: Maybe<DeleteAuthor>;
  updateAuthor?: Maybe<UpdateAuthor>;
};


export type MutationCreateAuthorArgs = {
  authorInput: CreateAuthorInput;
};


export type MutationDeleteAuthorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateAuthorArgs = {
  authorInput: CreateAuthorInput;
  id: Scalars['ID']['input'];
};

export type PaperType = {
  __typename?: 'PaperType';
  abstract: Scalars['String']['output'];
  authors?: Maybe<Array<Maybe<AuthorType>>>;
  categories?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  journalRef?: Maybe<Scalars['String']['output']>;
  links?: Maybe<Scalars['String']['output']>;
  pubDate: Scalars['DateTime']['output'];
  relatedTweets?: Maybe<Array<Maybe<TweetType>>>;
  title: Scalars['String']['output'];
  trendinessScore: Scalars['Float']['output'];
  updatedDate: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  author?: Maybe<AuthorType>;
  authors?: Maybe<Array<Maybe<AuthorType>>>;
  paper?: Maybe<PaperType>;
  papers?: Maybe<Array<Maybe<PaperType>>>;
  tweet?: Maybe<TweetType>;
  tweets?: Maybe<Array<Maybe<TweetType>>>;
};


export type QueryAuthorArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryPaperArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryTweetArgs = {
  id: Scalars['UUID']['input'];
};

export type TweetType = {
  __typename?: 'TweetType';
  date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  likes: Scalars['Int']['output'];
  paperSet: Array<PaperType>;
  retweets: Scalars['Int']['output'];
  text: Scalars['String']['output'];
  url: Scalars['String']['output'];
  userName: Scalars['String']['output'];
};

export type UpdateAuthor = {
  __typename?: 'UpdateAuthor';
  author?: Maybe<AuthorType>;
};

export type AuthorInfoFragment = { __typename?: 'AuthorType', name: string, affiliation?: string | null } & { ' $fragmentName'?: 'AuthorInfoFragment' };

export type GetPapersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPapersQuery = { __typename?: 'Query', papers?: Array<{ __typename?: 'PaperType', id: any, title: string, abstract: string, pubDate: any, updatedDate: any, categories?: string | null, links?: string | null, comment?: string | null, journalRef?: string | null, trendinessScore: number, authors?: Array<(
      { __typename?: 'AuthorType' }
      & { ' $fragmentRefs'?: { 'AuthorInfoFragment': AuthorInfoFragment } }
    ) | null> | null } | null> | null };

export type TweetInfoFragment = { __typename?: 'TweetType', url: string, userName: string, retweets: number, likes: number, text: string, date: any } & { ' $fragmentName'?: 'TweetInfoFragment' };

export type GetRelatedTweetsQueryVariables = Exact<{
  paperId: Scalars['UUID']['input'];
}>;


export type GetRelatedTweetsQuery = { __typename?: 'Query', paper?: { __typename?: 'PaperType', relatedTweets?: Array<(
      { __typename?: 'TweetType' }
      & { ' $fragmentRefs'?: { 'TweetInfoFragment': TweetInfoFragment } }
    ) | null> | null } | null };

export const AuthorInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthorInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthorType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"affiliation"}}]}}]} as unknown as DocumentNode<AuthorInfoFragment, unknown>;
export const TweetInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TweetInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TweetType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"retweets"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]} as unknown as DocumentNode<TweetInfoFragment, unknown>;
export const GetPapersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPapers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"papers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthorInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"pubDate"}},{"kind":"Field","name":{"kind":"Name","value":"updatedDate"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}},{"kind":"Field","name":{"kind":"Name","value":"links"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"journalRef"}},{"kind":"Field","name":{"kind":"Name","value":"trendinessScore"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthorInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthorType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"affiliation"}}]}}]} as unknown as DocumentNode<GetPapersQuery, GetPapersQueryVariables>;
export const GetRelatedTweetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRelatedTweets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paperId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paper"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paperId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"relatedTweets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TweetInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TweetInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TweetType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"retweets"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]} as unknown as DocumentNode<GetRelatedTweetsQuery, GetRelatedTweetsQueryVariables>;