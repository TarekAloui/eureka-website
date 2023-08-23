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
};

export type Author = {
  __typename?: 'Author';
  affiliation?: Maybe<Scalars['String']['output']>;
  citations: Scalars['Int']['output'];
  hIndex: Scalars['Int']['output'];
  i10Index: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  interests?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  profileUrl?: Maybe<Scalars['String']['output']>;
};

export type AuthorInput = {
  affiliation?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor: Author;
  createPaper: Paper;
  createTweet: Tweet;
  deleteAuthor: Scalars['Boolean']['output'];
  deletePaper: Scalars['Boolean']['output'];
  deleteTweet: Scalars['Boolean']['output'];
  updateAuthor?: Maybe<Author>;
  updatePaper?: Maybe<Paper>;
  updateTweet?: Maybe<Tweet>;
};


export type MutationCreateAuthorArgs = {
  affiliation?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};


export type MutationCreatePaperArgs = {
  input: PaperInput;
};


export type MutationCreateTweetArgs = {
  input: TweetInput;
};


export type MutationDeleteAuthorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePaperArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTweetArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateAuthorArgs = {
  affiliation?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdatePaperArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<PaperInput>;
};


export type MutationUpdateTweetArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<TweetInput>;
};

export type Paper = {
  __typename?: 'Paper';
  abstract?: Maybe<Scalars['String']['output']>;
  authors?: Maybe<Array<Maybe<Author>>>;
  categories?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  journal_ref?: Maybe<Scalars['String']['output']>;
  links?: Maybe<Scalars['String']['output']>;
  pub_date: Scalars['String']['output'];
  relatedTweets?: Maybe<Array<Maybe<Tweet>>>;
  title: Scalars['String']['output'];
  trendiness_score: Scalars['Float']['output'];
  updated_date: Scalars['String']['output'];
};

export type PaperInput = {
  abstract?: InputMaybe<Scalars['String']['input']>;
  authors?: InputMaybe<Array<InputMaybe<AuthorInput>>>;
  relatedTweets?: InputMaybe<Array<InputMaybe<TweetInput>>>;
  title: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  author?: Maybe<Author>;
  authors?: Maybe<Array<Maybe<Author>>>;
  paper?: Maybe<Paper>;
  papers?: Maybe<Array<Maybe<Paper>>>;
  tweet?: Maybe<Tweet>;
  tweets?: Maybe<Array<Maybe<Tweet>>>;
};


export type QueryAuthorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPaperArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTweetArgs = {
  id: Scalars['ID']['input'];
};

export type Tweet = {
  __typename?: 'Tweet';
  date: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  likes: Scalars['Int']['output'];
  retweets: Scalars['Int']['output'];
  text: Scalars['String']['output'];
  url: Scalars['String']['output'];
  user_name: Scalars['String']['output'];
};

export type TweetInput = {
  id: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};

export type AuthorInfoFragment = { __typename?: 'Author', name: string, affiliation?: string | null } & { ' $fragmentName'?: 'AuthorInfoFragment' };

export type GetPapersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPapersQuery = { __typename?: 'Query', papers?: Array<{ __typename?: 'Paper', id: string, title: string, abstract?: string | null, pub_date: string, updated_date: string, categories?: string | null, links?: string | null, comment?: string | null, journal_ref?: string | null, trendiness_score: number, authors?: Array<(
      { __typename?: 'Author' }
      & { ' $fragmentRefs'?: { 'AuthorInfoFragment': AuthorInfoFragment } }
    ) | null> | null } | null> | null };

export type TweetInfoFragment = { __typename?: 'Tweet', url: string, user_name: string, retweets: number, likes: number, text: string, date: string } & { ' $fragmentName'?: 'TweetInfoFragment' };

export type GetRelatedTweetsQueryVariables = Exact<{
  paperId: Scalars['ID']['input'];
}>;


export type GetRelatedTweetsQuery = { __typename?: 'Query', paper?: { __typename?: 'Paper', relatedTweets?: Array<(
      { __typename?: 'Tweet' }
      & { ' $fragmentRefs'?: { 'TweetInfoFragment': TweetInfoFragment } }
    ) | null> | null } | null };

export const AuthorInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthorInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"affiliation"}}]}}]} as unknown as DocumentNode<AuthorInfoFragment, unknown>;
export const TweetInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TweetInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tweet"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}},{"kind":"Field","name":{"kind":"Name","value":"retweets"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]} as unknown as DocumentNode<TweetInfoFragment, unknown>;
export const GetPapersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPapers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"papers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthorInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"pub_date"}},{"kind":"Field","name":{"kind":"Name","value":"updated_date"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}},{"kind":"Field","name":{"kind":"Name","value":"links"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"journal_ref"}},{"kind":"Field","name":{"kind":"Name","value":"trendiness_score"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthorInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"affiliation"}}]}}]} as unknown as DocumentNode<GetPapersQuery, GetPapersQueryVariables>;
export const GetRelatedTweetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRelatedTweets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paperId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paper"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paperId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"relatedTweets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TweetInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TweetInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tweet"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"user_name"}},{"kind":"Field","name":{"kind":"Name","value":"retweets"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]} as unknown as DocumentNode<GetRelatedTweetsQuery, GetRelatedTweetsQueryVariables>;