// .eslintrc.js
module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
	parser: '@typescript-eslint/parser',
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 4,
				printWidth: 120,
				bracketSpacing: true,
				arrowParens: 'always', // avoid 는 파라메터 한개 일대 괄호 안 넣음.
				endOfLine: 'auto',
				'react/prop-types': 'off',
			},
		],
	},
	parserOptions: {
		parser: '@typescript-eslint/parser',
		//project: 'tsconfig.json',
		//sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
		// ecmaVersion: 'latest',
		//sourceType: 'module',
	},
};
