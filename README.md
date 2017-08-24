# react-bank-card

[![npm package][npm-badge]][npm]
[![Travis][build-badge]][build]
[![Codecov][codecov-badge]][codecov]
![Module formats][module-formats]

`react-card-bank` checks your `number` prop and display on of these three folowwing logos if `number` is recognized ad credit card number:
* Visa
* MasterCard
* Cb

You can hightlight specific field (to match with your form field).

> There is also the card verso displayed following `verso` prop.

## Getting started

[![react-bank-card](https://nodei.co/npm/react-bank-card.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-bank-card/)

You can download `react-bank-card` from the NPM registry via the `npm` or `yarn` commands

```shell
yarn add react-bank-card
npm install react-bank-card --save
```

If you don't use package manager and you want to include `react-bank-card` directly in your html, you could get it from the UNPKG CDN

```html
https://unpkg.com/react-bank-card/dist/react-bank-card.min.js.
```

## Usage

```javascript
import React from "react"
import BankCard from "react-bank-card"

const App = () =>
  <ReactBankCard
    cvc="123"
    expiryMonth={10}
    expiryYear={19}
    number="4929588303328334"
    name="XuopleD"
    highlighted={{
      number: true,
      name: false,
      cvc: true,
      expiryMonth: false,
      expiryYear: false,
    }}
  />
```

## Demo

See [Demo page][github-page]

## Contributing

* ⇄ Pull/Merge requests and ★ Stars are always welcome.
* For bugs and feature requests, please [create an issue][github-issue].
* Pull requests must be accompanied by passing automated tests (`npm test`).

See [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines

## Changelog

See [changelog](./CHANGELOG.md)

## License

This project is licensed under the MIT License - see the [LICENCE.md](./LICENCE.md) file for details

[npm-badge]: https://img.shields.io/npm/v/react-bank-card.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-bank-card

[build-badge]: https://img.shields.io/travis/xuopled/react-bank-card/master.svg?style=flat-square
[build]: https://travis-ci.org/xuopled/react-bank-card

[codecov-badge]: https://img.shields.io/codecov/c/github/xuopled/react-bank-card.svg?style=flat-square
[codecov]: https://codecov.io/gh/xuopled/react-bank-card

[module-formats]: https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg?style=flat-square

[github-page]: https://xuopled.github.io/react-bank-card
[github-issue]: https://github.com/xuopled/react-bank-card/issues/new
