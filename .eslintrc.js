module.exports = {
	env: {
	  browser: true,
	  es2021: true,
	  "jest/globals": true,
	  node: true,
	},
	extends: ["eslint:recommended", "prettier"],
	parserOptions: {
	  ecmaVersion: "latest",
	  sourceType: "module",
	},
	plugins: ["jest"],
	rules: {
	  "import/prefer-default-export": "off",
	  "no-unused-vars": "warn",
	  "no-useless-escape": "warn",
	  "max-len": [
		"error",
		{
		  code: 120,
		  ignoreComments: true,
		},
	  ],
	},
  };
  