# Astro starter template

This is a starter template for an [Astro](https://astro.build/) project.

This template was generated with the [Astro setup wizard](https://docs.astro.build/en/install/auto/#1-run-the-setup-wizard) and updated to include configuration for [TypeScript](https://www.typescriptlang.org/), [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/).

This repository can be cloned but can also be used as a template to generate a new repository. See [Creating a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) for more information on how to use GitHub repository templates.

In your local copy, delete the `.github` folder and change the `name` field in `package.json` to something else. Then install dependencies. A `package-lock.json` file will also be generated:

```shell
npm i
```

## Folder structure

```text
├── public/
├── src/
│   └── pages/
│       └── index.astro
│   └── env.d.ts
└── .gitignore
└── .prettierrc.json
└── astro.config.mjs
└── package.json
└── README.md
└── tsconfig.json
```

## IDE setup

If using [Visual Studio Code](https://code.visualstudio.com/), ensure that the [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extensions are installed.

In addition, add the following to the user or workspace [settings](https://code.visualstudio.com/docs/getstarted/settings) for Visual Studio Code:

```json
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"prettier.documentSelectors": ["**/*.astro"],
"[astro]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"eslint.probe": [
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact",
  "html",
  "vue",
  "markdown",
  "astro"
],
"eslint.validate": ["astro"]
```

See the [Editor Setup](https://docs.astro.build/en/editor-setup/) section in the offical Astro documentation for information on other IDEs.

## Scripts

| Script            | Action                                                |
| :---------------- | :---------------------------------------------------- |
| `npm run dev`     | Starts local dev server at `localhost:4321`           |
| `npm run build`   | Creates a `dist` folder containing a production build |
| `npm run preview` | Preview a production build locally                    |
| `npm run format`  | Formats with Prettier                                 |
| `npm run lint`    | Lints with ESLint                                     |
