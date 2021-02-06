# create-typescript-library

![checks-status](https://img.shields.io/github/checks-status/LukasPolak/create-typescript-library/main?style=flat-square) ![workflow/status](https://img.shields.io/github/workflow/status/lukaspolak/create-typescript-library/CI?style=flat-square) ![codecov](https://img.shields.io/codecov/c/github/lukaspolak/create-typescript-library?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/@lukaspolak/create-typescript-library?style=flat-square) ![npm](https://img.shields.io/npm/v/@lukaspolak/create-typescript-library?style=flat-square)

> A short description about what your library is.

## Motivation

> Elaborate on the reason behind this library: why may people need it? What issues does it solve? How is it different from the similar libraries?

## Getting started

> Go through the steps necessary to install, configure, and use your library.

### Install

```bash
npm install @lukaspolak/create-typescript-library
```

or

```bash
yarn add @lukaspolak/create-typescript-library
```

## Documentation

> Reference the documentation website, or write the documentation straight in this README file.

## Contributing

Please read the [Contribution guidelines](.github/CONTRIBUTING.md) to start with your awesome contributions!

## Why the library is prefixed with `@lukaspolak/`

There are a lot of similar libraries/packages on [GitHub](https://github.com/features/packages) and [npm](https://www.npmjs.com/), that can do the same. I wanted to enhance my programming skills, and I didn't want to find a unique name for the package.

## INITIALIZATION TODO

- [ ] replace `create-typescript-library` with repository name
- [ ] update `keywords` in `package.json` file
- [ ] remove `INITIALIZATION TODO` section
- [ ] update `buildEsm.input` array with correct paths

For [React](https://reactjs.org/) based library install (`yarn add @types/react react -D`) dev dependencies, and update `tsconfig.json` file with:

```jsonc
{
  // ...
  "compilerOptions": {
    // ...
    "allowSyntheticDefaultImports": true, // replace original
    "jsx": "react", // add
    "esModuleInterop": true // add
    // ...
  }
  // ...
}
```
