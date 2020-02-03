# bmt

> in **B**rowser, **M**easure **T**ext width.

[![npm Version](https://img.shields.io/npm/v/bmt.svg)](https://www.npmjs.com/package/bmt)
[![Build Status](https://github.com/hustcc/bmt/workflows/build/badge.svg)](https://github.com/hustcc/bmt/actions)
[![Coverage Status](https://coveralls.io/repos/github/hustcc/bmt/badge.svg?branch=master)](https://coveralls.io/github/hustcc/bmt?branch=master)
[![npm License](https://img.shields.io/npm/l/bmt.svg)](https://www.npmjs.com/package/bmt)


## Install

```bash
$ npm i --save bmt
```


## Usage

```ts
import { measureTextByDOM, measureTextByCanvas } from 'bmt';

const font = {
  fontFamily: 'sans-serif',
  fontSize: 16,
};

measureTextByDOM('hello world', font); // = 80
measureTextByCanvas('hello world', font); // ~= 80
```


## Perf

<img alt="perf" title="perf" src="https://user-images.githubusercontent.com/7856674/73620740-1b80e380-466e-11ea-9b83-26efebfae06e.png" width="400" />

Run on your computer.

```bash
$ npm run perf
```


## License

MIT@[hustcc](https://github.com/hustcc).
