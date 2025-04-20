module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@babel/eslint-parser',
      ecmaVersion: 2020,
      sourceType: 'module',
      requireConfigFile: false,
    },
    rules: {
      'vue/multi-word-component-names': 'off', // 關掉你遇到錯誤的這個規則
    },
  };
  