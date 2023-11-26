module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'xo',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:i18next/recommended',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
		},
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		allowImportExportEverywhere: false,
		codeFrame: true,
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'i18next',
	],
	rules: {
		strictNullChecks: 0,
		'react/react-in-jsx-scope': 0,
		'@typescript-eslint/naming-convention': null,
		'react/no-deprecated': 0,
		'react/no-children-prop': 0,
		'@typescript-eslint/no-unsafe-argument': 0,
		'@typescript-eslint/no-floating-promises': 0,
		'no-promise-executor-return': 0,
	},
};
