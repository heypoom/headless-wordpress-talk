import {urql} from './urql'
import {PostSlugsDocument} from '../gql/graphql'

export async function getPostSlugs(): Promise<string[]> {
  const query = await urql.query(PostSlugsDocument, {}).toPromise()

  return query.data?.posts?.nodes
    .map((node) => node.slug)
    .filter((x) => x) as string[]
}
