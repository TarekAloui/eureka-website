import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	schema: './src/lib/graphql/schema.gql',
	documents: ['src/**/*.gql', 'src/**/*.graphql'],
	ignoreNoDocuments: true, // for better experience with the watcher
	generates: {
		'./src/lib/graphql/types.generated.ts': {
			preset: 'client',
			plugins: ['typescript'],
		},
		'./src/components/': {
			preset: 'near-operation-file',
			presetConfig: {
				extension: '.generated.ts',
				baseTypesPath: 'types.generated.ts',
			},
			plugins: ['typescript-operations', 'typed-document-node'],
		},
	},
}

export default config
