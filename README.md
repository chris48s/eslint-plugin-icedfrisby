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

Add `icedfrisby` to the plugins section of your `.eslintrc` configuration file.

```json
{
    "plugins": [
        "icedfrisby"
    ]
}
```

Then configure the rules you want to use under the rules section. e.g:

```json
{
    "rules": {
        "icedfrisby/no-exclusive-tests:": ["error"]
    }
}
```

## Configs

This plugin exports a recommended config:

```json
{
    "extends": [
        "plugin:icedfrisby/recommended"
    ]
}
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
