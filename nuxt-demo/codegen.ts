import type {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:8000/index.php?graphql',
  documents: [
    'queries/**/*.gql',
    'queries/**/*.tsx',
    'pages/**/*.vue',
    'components/**/*.vue',
  ],
  ignoreNoDocuments: true,
  generates: {
    './gql/': {
      preset: 'client',
      plugins: [],
      config: {
        useTypeImports: true,
      },
    },
  },
}

export default config
