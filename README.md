# eslint-plugin-icedfrisby

[![Build](https://github.com/chris48s/eslint-plugin-icedfrisby/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/chris48s/eslint-plugin-icedfrisby/actions/workflows/build.yml)
![version](https://img.shields.io/npm/v/eslint-plugin-icedfrisby)
![license](https://img.shields.io/npm/l/eslint-plugin-icedfrisby)

ESLint rules for [IcedFrisby](https://github.com/IcedFrisby/IcedFrisby).

## Installation

```sh
npm i --save-dev eslint eslint-plugin-icedfrisby
```

## Usage

As of eslint-plugin-icedfrisby 0.2.0 this plugin is compatible with ESLint>=8.21.0 only and must be configured using flat config format.

Example `.eslint.config.js` file:

```js
const icedfrisby = require("eslint-plugin-icedfrisby");

module.exports = [
  // This plugin exports a recommended config
  icedfrisby.configs.recommended,

  {
    // Add icedfrisby to the plugins declaration
    plugins: {
      icedfrisby,
    },

    // Optionally customise or configure rules
    rules: {
      "icedfrisby/no-skipped-tests": ["error"]
    },
  },
];
```

## Rules

<!-- begin auto-generated rules list -->

💼 Configurations enabled in.\
⚠️ Configurations set to warn in.\
✅ Set in the `recommended` configuration.

| Name                                                   | Description              | 💼 | ⚠️ |
| :----------------------------------------------------- | :----------------------- | :- | :- |
| [no-exclusive-tests](docs/rules/no-exclusive-tests.md) | Disallow exclusive tests | ✅  |    |
| [no-skipped-tests](docs/rules/no-skipped-tests.md)     | Disallow skipped tests   |    | ✅  |

<!-- end auto-generated rules list -->
