#!/usr/bin/env node
'use strict'
const countLinesInFile = require('count-lines-in-file')
const globby = require('globby')
const path = require('path')
const chalk = require('chalk')
const program = require('commander')
const version = require('./package.json').version

let maxErrors = 0
let minLinesByFile = 1
let maxLinesByFile = 300
let scanPaths = ['.']

const list = (val) => {
  return val.split(', ')
}

program
  .version(version, '-v, --version')
  .option(
    '--maxlines <maxlines>',
    `Maximum lines by file. Default: ${maxLinesByFile}`,
    parseInt,
  )
  .option(
    '--minlines <minlines>',
    `Minimum lines by file. Default: ${minLinesByFile}`,
    parseInt,
  )
  .option(
    '--maxerrors <maxerrors>',
    `Maximum errors accept. Default: ${maxErrors}`,
    parseInt,
  )
  .option('--path <path>', `Globby paths to scan. Default: ${scanPaths}`, list)
  .option('--ignore <ignore>', 'Globby paths to ignore', list)
  .parse(process.argv)

program.maxerrors && (maxErrors = program.maxerrors)
program.maxlines && (maxLinesByFile = program.maxlines)
program.minlines && (minLinesByFile = program.minlines)
program.path && (scanPaths = program.path)

if (program.ignore) {
  program.ignore.forEach((path) => {
    scanPaths.push(`!${path}`)
  })
}
scanPaths.push('!node_modules')

globby(scanPaths)
  .then((paths) => {
    let totalLines = 0
    let totalErrors = 0
    let currentTotalFiles = 0

    console.log(chalk.inverse('[Init Limit Lines]'))
    console.log(
      chalk.inverse.underline(
        'Docs: https://github.com/tiagoporto/limit-lines',
      ),
    )

    paths.forEach((file) => {
      countLinesInFile(file, (error, numberOfLines) => {
        currentTotalFiles += 1
        totalLines += numberOfLines

        if (error) {
          console.error(error)
        }

        const message = `${numberOfLines} ${chalk.underline(
          path.resolve(file),
        )}`

        if (numberOfLines > maxLinesByFile || numberOfLines < minLinesByFile) {
          totalErrors += 1
          console.log(chalk.reset('Lines by file:'), chalk.red(message))
        }

        if (currentTotalFiles === paths.length) {
          console.log('')
          console.log(chalk(`Total Files: ${paths.length}`))
          console.log(chalk(`Total Lines: ${totalLines}`))
          console.log(chalk(`Min lines by file: ${minLinesByFile}`))
          console.log(chalk(`Max lines by file: ${maxLinesByFile}`))

          let color = 'reset'
          totalErrors > maxErrors && (color = 'red')
          totalErrors > 0 && totalErrors <= maxErrors && (color = 'yellow')

          console.log(
            chalk[color](
              `Max Errors: ${maxErrors} Founded Errors: ${totalErrors}`,
            ),
          )
          if (color !== 'red') {
            console.log(chalk.green('Limit Lines Passed'))
          }

          if (totalErrors > maxErrors) {
            process.exit(1)
          }
        }
      })
    })
  })
  .catch((err) => console.error(err))
