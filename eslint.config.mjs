import globals from "globals";
import js from "@eslint/js";
import eslintPlugin from "eslint-plugin-eslint-plugin";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  eslintPlugin.configs.recommended,
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: 2026,
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "prettier/prettier": ["error"],
    },
  },
];
