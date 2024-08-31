module.exports = {
  root: true,
  env: {
    browser: true,  // Enables browser globals like `window` and `document`
    es2020: true,   // Enables ES2020 features
    node: true      // Enables Node.js globals like `process` and `__dirname`
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',  // Allows for the use of `import` statements
  },
  settings: {
    react: {
      version: '18.2' // Specifies the React version to lint against
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off', // Turns off the rule that disallows `target="_blank"` in links
    'react-refresh/only-export-components': [
      'warn', // Warns when components are not exported properly with React Refresh
      { allowConstantExport: true }
    ],
  },
}
