module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'xo',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
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
	},
	plugins: [
		'react',
	],
	rules: {
		strictNullChecks: 0,
		'react/react-in-jsx-scope': 0,
		'@typescript-eslint/naming-convention': 0,
		'react/no-deprecated': 0,
		'react/no-children-prop': 0,
		'@typescript-eslint/no-unsafe-argument': 0,
		'@typescript-eslint/no-floating-promises': 0,
	},
};
