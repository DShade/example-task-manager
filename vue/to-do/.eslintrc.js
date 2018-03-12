// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: ['plugin:vue/base','plugin:vue/strongly-recommended'],
  // required to lint *.vue files
  plugins: [
    'vue',
    'html'
  ],
  // add your custom rules here
  'rules': {
    'no-param-reassign' : 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
