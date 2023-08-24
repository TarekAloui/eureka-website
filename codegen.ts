import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	overwrite: true,
	// schema: "./src/lib/graphql/schema.gql",
	schema: {
		'http://127.0.0.1:9000/graphql/': {
			method: 'GET',
		},
	},
	documents: './src/**/*.gql',
	generates: {
		'./src/lib/graphql/documents/': {
			preset: 'client',
			plugins: [],
		},
		'./graphql.schema.json': {
			plugins: ['introspection'],
		},
	},
}

export default config
