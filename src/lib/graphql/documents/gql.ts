/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment AuthorInfo on Author {\n  name\n  affiliation\n}\n\nquery GetPapers {\n  papers {\n    id\n    title\n    authors {\n      ...AuthorInfo\n    }\n    abstract\n    pub_date\n    updated_date\n    categories\n    links\n    comment\n    journal_ref\n    trendiness_score\n  }\n}": types.AuthorInfoFragmentDoc,
    "fragment TweetInfo on Tweet {\n  url\n  user_name\n  retweets\n  likes\n  text\n  date\n}\n\nquery GetRelatedTweets($paperId: ID!) {\n  paper(id: $paperId) {\n    relatedTweets {\n      ...TweetInfo\n    }\n  }\n}": types.TweetInfoFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment AuthorInfo on Author {\n  name\n  affiliation\n}\n\nquery GetPapers {\n  papers {\n    id\n    title\n    authors {\n      ...AuthorInfo\n    }\n    abstract\n    pub_date\n    updated_date\n    categories\n    links\n    comment\n    journal_ref\n    trendiness_score\n  }\n}"): (typeof documents)["fragment AuthorInfo on Author {\n  name\n  affiliation\n}\n\nquery GetPapers {\n  papers {\n    id\n    title\n    authors {\n      ...AuthorInfo\n    }\n    abstract\n    pub_date\n    updated_date\n    categories\n    links\n    comment\n    journal_ref\n    trendiness_score\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment TweetInfo on Tweet {\n  url\n  user_name\n  retweets\n  likes\n  text\n  date\n}\n\nquery GetRelatedTweets($paperId: ID!) {\n  paper(id: $paperId) {\n    relatedTweets {\n      ...TweetInfo\n    }\n  }\n}"): (typeof documents)["fragment TweetInfo on Tweet {\n  url\n  user_name\n  retweets\n  likes\n  text\n  date\n}\n\nquery GetRelatedTweets($paperId: ID!) {\n  paper(id: $paperId) {\n    relatedTweets {\n      ...TweetInfo\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;