<p align="center">
  <img src="./docs/logo.svg" alt="limit lines" width="600">
<p>

![Open Source Love](https://badges.frapsoft.com/os/v3/open-source.svg) <img src="https://badges.frapsoft.com/bash/v1/bash-150x25.png?v=103" alt="Bash Shell" width="120">

<p align="right">
  <code> 👍 ? <a href="https://github.com/tiagoporto/limitlines/stargazers">⭐</a> : <a href="https://github.com/tiagoporto/limitlines/issues">😞</a></code>
</p>

[![Release](https://img.shields.io/npm/v/limitlines.svg?style=flat-square&label=release)](https://github.com/tiagoporto/limitlines/releases)
[![Node](https://img.shields.io/node/v/limitlines.svg?style=flat-square)](https://www.npmjs.com/package/limitlines)
[![Downloads](https://img.shields.io/npm/d18m/limitlines.svg?style=flat-square)](https://www.npmjs.com/package/limitlines)
[![install size](https://packagephobia.com/badge?p=limitlines)](https://packagephobia.com/result?p=limitlines)

<!-- [![Coverage Status](https://img.shields.io/coveralls/tiagoporto/limitlines.svg?style=flat-square)](https://coveralls.io/github/tiagoporto/limitlines) -->
<!-- [![Mutation testing cover](https://badge.stryker-mutator.io/github.com/tiagoporto/limitlines/main)](https://stryker-mutator.github.io) -->

> Lint and report number of lines by file.

![Screenshot](./docs/Screenshot.png)

## Installation

```bash
npm install limitlines
```

## Execute

```bash
limitlines [source] [options]
```

### Source

Globby paths to scan.

`string`, separate by comma.

Default: `.`

Accept [globby](https://github.com/sindresorhus/globby).

```bash
limitlines 'folder1/**/*, folder2/*.{html,js}'
```

## Options

### Ignore

Paths to ignore.

`string`, separate by comma.

Default: `node_modules`

```bash
limitlines --ignore 'somefolder'
```

### Max Lines

Maximum lines by file.

`integer`

Default: `300`

```bash
limitlines --maxlines 450
```

### Min Lines

Minimun accepted lines by file.

`integer`

Default: 1

```bash
limitlines --minlines 1
```

### Max Errors

Maximum errors accept.

`integer`

Default: `0`

```bash
limitlines --maxerrors 3
```

### Version

Output version number.

Alias `-v`.

```bash
limitlines --version
```

## License

This project is licensed under the [MIT license](https://github.com/tiagoporto/limitlines/blob/main/LICENSE).
