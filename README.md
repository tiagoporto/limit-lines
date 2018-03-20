# Limit Lines ![Open Source Love](https://badges.frapsoft.com/os/v3/open-source.svg?v=103)

<p align="right">
  <code>LIKED ? Leave a <a href="https://github.com/tiagoporto/limit-lines">⭐</a> : 😞</code>
</p>

[![Release](https://img.shields.io/npm/v/limit-lines.svg?style=flat-square&label=release)](https://github.com/tiagoporto/limit-lines/releases)
[![Downloads](https://img.shields.io/npm/dt/limit-lines.svg?style=flat-square)](https://www.npmjs.com/package/limit-lines)
[![License](https://img.shields.io/github/license/tiagoporto/limit-lines.svg?style=flat-square)](https://raw.githubusercontent.com/tiagoporto/limit-lines/master/LICENSE)
[![Dependencies Status](https://img.shields.io/david/tiagoporto/limit-lines.svg?style=flat-square)](https://david-dm.org/tiagoporto/limit-lines)
[![devDependencies Status](https://img.shields.io/david/dev/tiagoporto/limit-lines.svg?style=flat-square)](https://david-dm.org/tiagoporto/limit-lines#info=devDependencies)
<!-- [![Build Status](https://img.shields.io/travis/tiagoporto/limit-lines.svg?style=flat-square&logo=travis)](https://travis-ci.org/tiagoporto/limit-lines) -->
<!-- [![Coverage Status](https://img.shields.io/coveralls/tiagoporto/limit-lines.svg)](https://coveralls.io/github/tiagoporto/limit-lines) -->


A tool for check and report lines by file.

## Installation
```console
npm install limit-lines
```


## Execute
```console
limitlines [options]
```


## Options

### Path
String, separate by comma
Globby paths to scan Default: `./`
```console
limitlines --path './folder1/**/*, ./folder2/*.{html,js}'
```

### Ignore
String, separate by comma
Paths to ignore. Default: `./node_modules`
```console
limitlines --ignore './somefolder'
```

### Maxlines
Integer
Maximum lines by file. Default: 300
```console
limitlines --maxlines 450
```

### Minlines
Integer
Minimun lines by file. Default: 1
```console
limitlines --minlines 1
```

### Maxerrors
Integer
Maximum errors accept. Default: 0
```
$ limitlines --maxerrors 3
```

### Version
Output the version number
Alias `-v`

```
$ limitlines --version
```



## License

Limit Lines is released under the terms of the [MIT license](https://github.com/tiagoporto/limit-lines/blob/master/LICENSE).
