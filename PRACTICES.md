# Practices

This template repository comes with a number of best practices set up and configured so you could focus on working on your next awesome library. Below you can find the full list of features provided by this template.

## Linting

- Uses [ESLint](https://eslint.org/) recommended configuration with TypeScript.
- Uses [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest#readme) for linting test suites.
- Uses [Prettier](https://prettier.io/) for formating code

## Git

- Uses [Commitizen](https://github.com/commitizen/cz-cli) for formatting commit messages

## Productivity

- Comes with a pre-configured CI pipeline ([GitHub Actions](https://github.com/features/actions)).
- Lints all staged files for commit via [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged), preventing statically checked mistakes to be committed in the first place.
- Configured import aliases (`compilerOptions.paths`) for shorter modules references during development and testing.

## Community

- Includes a README template.
- Includes detailed Contributing guidelines.
- Includes a basic set of issues templates (GitHub).

## Distribution

- Distributes the library in three formats: UMD, ESM, CommonJS.
- Configures the bundler for a tree-shackable output.
- Configures the publishing pipeline (`publishOnly`).
