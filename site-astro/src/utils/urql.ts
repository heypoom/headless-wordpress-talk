import {Client, fetchExchange} from '@urql/core'

export const client = new Client({
  url: 'http://localhost:8000/index.php?graphql',
  exchanges: [fetchExchange],
})
