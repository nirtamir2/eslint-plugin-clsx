# eslint-plugin-clsx

Rules for consistent usage of `clsx` functions.

## Installation

You'll first need to install [ESLint](http://eslint.org) >=8 and `eslint-plugin-clsx`:

```shell
pnpm add -D eslint eslint-plugin-clsx
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-clsx` globally.

## Usage

Add an override to your ESLint configuration file that specifies this plugin, [`eslint-plugin-clsx`](https://github.com/nirtamir2/eslint-plugin-clsx) and its recommended rules for your `package.json` file:

```js
module.exports = {
  extends: ["plugin:eslint-plugin-clsx/recommended"],
};
```

Or, individually configure the rules you want to use under the rules section.

```js
module.exports = {
    {
      plugins: ["clsx"],
      rules: {
        "clsx/no-useless-clsx": "error",
      },
  ],
};
```

## Supported Rules

<!-- begin auto-generated rules list -->

🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                             | Description                                      | 🔧 |
| :----------------------------------------------- | :----------------------------------------------- | :- |
| [no-useless-clsx](docs/rules/no-useless-clsx.md) | enforce use of "clsx" with dynamic data argument | 🔧 |

<!-- end auto-generated rules list -->
