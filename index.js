#!/usr/bin/env node
const countLinesInFile = require('count-lines-in-file')
const globby = require('globby')
const path = require('path')
const chalk = require('chalk')
const program = require('commander')

let maxErrors = 0
let minLinesByFile = 1
let maxLinesByFile = 300
let scanPaths = ['./**/*']

const list = val => {
  return val.split(',')
}

program
  .version('0.1.0', '-v, --version')
  .option('--maxlines <maxlines>', `Maximum lines by file. Default: ${maxLinesByFile}`, parseInt)
  .option('--minlines <minlines>', `Maximum lines by file. Default: ${minLinesByFile}`, parseInt)
  .option('--maxerrors <maxerrors>', `Maximum errors accept. Default: ${maxErrors}`, parseInt)
  .option('--path <path>', 'Globby paths to scan', list)
  .option('--ignore <ignore>', 'Globby paths to ignore', list)
  .parse(process.argv)

program.maxerrors && (maxErrors = program.maxerrors)
program.maxlines && (maxLinesByFile = program.maxlines)
program.minlines && (minLinesByFile = program.minlines)
program.path && (scanPaths = program.path)

const init = async () => {
  const paths = await globby(scanPaths)

  let totalLines = 0
  let totalErrors = 0
  let currentTotalFiles = 0

  paths.forEach(file => {
    countLinesInFile(file, (error, numberOfLines) => {
      currentTotalFiles += 1
      totalLines += numberOfLines
      numberOfLines > maxLinesByFile && (totalErrors += 1)

      if (error) {
        console.error(error)
      }

      const message = `${numberOfLines} ${chalk.underline(path.resolve(__dirname, file))}`
      // const color = (numberOfLines > maxLinesByFile || numberOfLines <= minLinesByFile) ? 'red' : 'green'

      // console.log(chalk[color](message))

      if (numberOfLines > maxLinesByFile || numberOfLines < minLinesByFile) {
        console.log(chalk.red(message))
      }

      if (currentTotalFiles === paths.length) {
        console.log('\x1b[0m', `Total Files: ${paths.length}`)
        console.log('\x1b[0m', `Total Lines: ${totalLines}`)
        console.log('\x1b[0m', `Max lines by file: ${maxLinesByFile}`)
        console.log('\x1b[0m', `Max Errors: ${maxErrors} Founded Errors: ${totalErrors}`)

        if (totalErrors > maxErrors) {
          process.exit(1)
        }
      }
    })
  })
}

init()
