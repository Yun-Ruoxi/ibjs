# IbJS's eslint config presets

English | [中文](./README.zh_CN.md)

- Auto fix and format, and integrate Prettier
- Mulit eslint config presets: JavaScript, JSON, TypeScript, Vue, React, ReactNative, Svelte, Solid and Astro
- Format other files by Prettier: HTML, CSS, Less, Sass, Scss, Markdown, MDX, yaml and yml
- Default Alias mapping "@" => "src", "~" => "./"

## Usage

### Install

```bash
pnpm i -D eslint typescript @ibjs/eslint-config
```

### Eslint config file

create config file ".eslintrc.js"

```js
module.exports = {
  extends: "ibjs",
};
```

- ibjs: base config, lint JS, TS, JSON
- ibjs/vue: extend base config, lint Vue
- ibjs/vue2: extend base config, lint Vue2
- ibjs/react: extend base config, lint React
- ibjs/react-native: extend react config, lint ReactNative
- ibjs/solid: extend base config, lint Solid
- ibjs/svelte: extend base config, lint Svelte
- ibjs/astro: extend base config, lint Astro

> please choose the suitable config for your project

> You don't need .eslintignore normally as it has been provided by the preset.

**set multi eslint configs in a project**

For example, there are some tsx files written by Solid under the folder "solid", and there are some tsx files written by React under the folder "react", then you can create the eslint config file under the folder, which are "ibjs/solid" and "ibjs/react"

### Config alias

the following code is the default config(there is no need to add), please change the alias follow the following code if need

```json
{
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [
          ["~", "."],
          ["@", "./src"]
        ],
        "extensions": [".js", ".jsx", ".mjs", ".ts", ".tsx", "mts", ".d.ts"]
      }
    }
  }
}
```

### VSCode settings for ESlint

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": false,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "svelte",
    "astro",
    "json"
  ]
}
```

### Add scripts for package.json

```json
{
  "scripts": {
    "lint": "eslint . --fix",
    "format": "ib prettier-format"
  }
}
```

> ib is the command of the package [@ibjs/cli](https://github.com/ibjs/cli)

- then use the following scripts to format and fix the project code

```bash
pnpm lint
```

- format other files

```bash
pnpm format
```
