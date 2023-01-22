# eslint-plugin-icedfrisby

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
✅ Set in the `recommended` configuration.

| Name                                                   | Description              | 💼 |
| :----------------------------------------------------- | :----------------------- | :- |
| [no-exclusive-tests](docs/rules/no-exclusive-tests.md) | Disallow exclusive tests | ✅  |

<!-- end auto-generated rules list -->
