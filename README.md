# react-get-inner-text

![checks-status](https://img.shields.io/github/checks-status/LukasPolak/react-get-inner-text/main?style=flat-square) ![workflow/status](https://img.shields.io/github/workflow/status/lukaspolak/react-get-inner-text/CI?style=flat-square) ![codecov](https://img.shields.io/codecov/c/github/lukaspolak/react-get-inner-text?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/@lukaspolak/react-get-inner-text?style=flat-square) ![npm](https://img.shields.io/npm/v/@lukaspolak/react-get-inner-text?style=flat-square)

Returns the inner text of [react elements](https://reactjs.org/docs/introducing-jsx.html). This package was inspired with [HTMLElement.innerText](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText) and [Node.textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) web APIs and [react-innertext](https://www.npmjs.com/package/react-innertext) npm package.

## Demo

[CodeSandbox](<[link-to-codesandbox](https://codesandbox.io/s/react-get-inner-text-49755?file=/src/App.tsx)>)

## Motivation

There is no native API in [React](https://reactjs.org/) to get the nested text content of react elements. This package provides a simple API to get the text content of nested elements (components)

## Getting started

To use this package, you only need to install this dependency, import it and invoke the `getInnerText` function, e.g.:

```tsx
const innerText = getInnerText(
  <div>
    <p>First paragraph.</p>
    <p>Second paragraph</p>
  </div>
)

console.log(innerText) // "First paragraph.Second paragraph"
```

### Install

```bash
npm install @lukaspolak/react-get-inner-text
```

or

```bash
yarn add @lukaspolak/react-get-inner-text
```

## Contributing

Please read the [Contribution guidelines](.github/CONTRIBUTING.md) to start with your awesome contributions!

## Why the library is prefixed with `@lukaspolak/`

There are a lot of similar libraries/packages on [GitHub](https://github.com/features/packages) and [npm](https://www.npmjs.com/), that can do the same. I wanted to enhance my programming skills, and I didn't want to find a unique name for the package.
