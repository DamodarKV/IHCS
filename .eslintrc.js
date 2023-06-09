module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: "2017",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["babel", "react", "import"],
  rules: {
    "import/no-duplicates": "error",
    "import/no-unresolved": "error",
    "import/named": "error",
    "react/no-typos": "error",
    "react/no-unused-state": "error",
    "react/jsx-no-bind": "off",
    "array-callback-return": "error",
    "consistent-return": "error",
    "babel/no-invalid-this": "error",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
  settings: {
    react: {
      pragma: "React",
      version: "17.0.2",
      flowVersion: "0.63.1",
    },
  },
};
