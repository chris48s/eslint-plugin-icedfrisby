"use strict";

const globals = require("globals");
const js = require("@eslint/js");
const eslintPlugin = require("eslint-plugin-eslint-plugin");
const prettierConfig = require("eslint-config-prettier");
const prettierPlugin = require("eslint-plugin-prettier");

module.exports = [
  js.configs.recommended,
  eslintPlugin.configs["flat/recommended"],
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "prettier/prettier": ["error"],
    },
  },
];
