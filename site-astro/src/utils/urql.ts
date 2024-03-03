import {Client, fetchExchange} from '@urql/core'

export const urql = new Client({
  url: 'http://localhost:8000/index.php?graphql',
  exchanges: [fetchExchange],
})
