/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

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
    "query PostBySlug($slug: ID!) {\n  post(id: $slug, idType: SLUG) {\n    id\n    content\n    title\n  }\n}": types.PostBySlugDocument,
    "query PostSlugs {\n  posts {\n    nodes {\n      slug\n    }\n  }\n}": types.PostSlugsDocument,
    "query Posts {\n  posts {\n    nodes {\n      id\n      title\n      excerpt\n      slug\n      categories {\n        nodes {\n          name\n        }\n      }\n    }\n  }\n}": types.PostsDocument,
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
export function graphql(source: "query PostBySlug($slug: ID!) {\n  post(id: $slug, idType: SLUG) {\n    id\n    content\n    title\n  }\n}"): (typeof documents)["query PostBySlug($slug: ID!) {\n  post(id: $slug, idType: SLUG) {\n    id\n    content\n    title\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query PostSlugs {\n  posts {\n    nodes {\n      slug\n    }\n  }\n}"): (typeof documents)["query PostSlugs {\n  posts {\n    nodes {\n      slug\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Posts {\n  posts {\n    nodes {\n      id\n      title\n      excerpt\n      slug\n      categories {\n        nodes {\n          name\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query Posts {\n  posts {\n    nodes {\n      id\n      title\n      excerpt\n      slug\n      categories {\n        nodes {\n          name\n        }\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;