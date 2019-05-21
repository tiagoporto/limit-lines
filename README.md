# Limit Lines ![Open Source Love](https://github.com/ellerbrock/open-source-badges/blob/master/badges/open-source-v3/open-source.svg) <img src="https://badges.frapsoft.com/bash/v1/bash-150x25.png?v=103" alt="Bash Shell" width="120">

<p align="right">
  <code>LIKED ? Leave a <a href="https://github.com/tiagoporto/limit-lines/stargazers">⭐</a> : <a href="https://github.com/tiagoporto/limit-lines/issues">😞</a></code>
</p>

[![Release](https://img.shields.io/npm/v/limit-lines.svg?style=flat-square&label=release)](https://github.com/tiagoporto/limit-lines/releases)
[![Node](https://img.shields.io/node/v/limit-lines.svg?style=flat-square)](https://www.npmjs.com/package/limit-lines)
[![Downloads](https://img.shields.io/npm/dt/limit-lines.svg?style=flat-square)](https://www.npmjs.com/package/limit-lines)
[![install size](https://packagephobia.now.sh/badge?p=limit-lines)](https://packagephobia.now.sh/result?p=limit-lines)
[![License](https://img.shields.io/github/license/tiagoporto/limit-lines.svg?style=flat-square)](https://raw.githubusercontent.com/tiagoporto/limit-lines/master/LICENSE)
[![dependencies Status](https://img.shields.io/david/tiagoporto/limit-lines.svg?style=flat-square)](https://david-dm.org/tiagoporto/limit-lines)

<!-- [![Build Status](https://img.shields.io/travis/com/tiagoporto/limit-lines/master.svg?label=tests&logo=travis&style=flat-square)](https://travis-ci.com/tiagoporto/limit-lines) -->
<!-- [![Coverage Status](https://img.shields.io/coveralls/tiagoporto/limit-lines.svg?style=flat-square)](https://coveralls.io/github/tiagoporto/limit-lines) -->
<!-- [![Mutation testing cover](https://badge.stryker-mutator.io/github.com/tiagoporto/limit-lines/master)](https://stryker-mutator.github.io) -->

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-yellow.svg?style=flat-square)](http://standardjs.com)
[![Inline docs](http://inch-ci.org/github/tiagoporto/limit-lines.svg?branch=master&style=flat-square)](http://inch-ci.org/github/tiagoporto/limit-lines)
[![devDependencies Status](https://img.shields.io/david/dev/tiagoporto/limit-lines.svg?style=flat-square)](https://david-dm.org/tiagoporto/limit-lines?type=dev)

> A CLI tool to check and report lines by file.

![Screenshot](Screenshot.png)

## Installation

```
npm install limit-lines
```

## Execute

```
limitlines [options]
```

## Options

### Path

`string`, separate by comma.

accept [globby](https://github.com/sindresorhus/globby) paths.

Default: `.`

```
limitlines --path 'folder1/**/*, folder2/*.{html,js}'
```

### Ignore

`string`, separate by comma

Paths to ignore.

Default: `node_modules`

```
limitlines --ignore 'somefolder'
```

### Maxlines

`integer`

Maximum lines by file. Default: `300`

```
limitlines --maxlines 450
```

### Minlines

`integer`

Minimun accepted lines by file. Default: 1

```
limitlines --minlines 1
```

### Maxerrors

`integer`

Maximum errors accept. Default: `0`

```
limitlines --maxerrors 3
```

### Version

Output the version number

Alias `-v`

```
limitlines --version
```

## License

Limit Lines is released under the terms of the [MIT license](https://github.com/tiagoporto/limit-lines/blob/master/LICENSE).
