module.exports = {
  'env': {
    'es6': true,
    "node": true,
    "mocha": true,
  },
  'extends': [
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018
  },
  'rules': {
    'max-len': ['error', 120, 2],
    "no-unused-vars": "off",
    "indent": ["error", 2]
  }
};
