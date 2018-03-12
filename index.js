const countLinesInFile = require('count-lines-in-file')
const globby = require('globby')
const path = require('path')
const chalk = require('chalk')
const maxErrors = 3
const maxlinesByFile = 250;

(async () => {
  const paths = await globby([
    './**/*',
    // './imports/**/*',
    // './packages/**/*',
    // './client/**/*',
    // './server/**/*',
    '!./**/*.{png,jpg}',
    '!./node_modules/**/*',
    '!./package-lock.json'
  ])

  let totalLines = 0
  let totalErrors = 0
  let currentTotalFiles = 0

  paths.forEach(file => {
    countLinesInFile(file, (error, numberOfLines) => {
      currentTotalFiles += 1
      totalLines += numberOfLines
      numberOfLines > maxlinesByFile && (totalErrors += 1)

      if (error) {
        return console.error(error)
      }

      const message = `${numberOfLines} ${chalk.underline(path.resolve(__dirname, file))}`
      const color = numberOfLines > maxlinesByFile ? chalk.red(message) : chalk.green(message)

      // console.log(chalk.underline.red(path.resolve(__dirname, file)))
      console.log(color)

      if (currentTotalFiles === paths.length) {
        console.log('\x1b[0m', `Total Files: ${paths.length}`)
        console.log('\x1b[0m', `Total Lines: ${totalLines}`)
        console.log('\x1b[0m', `Max Errors: ${maxErrors} Found Errors: ${totalErrors}`)
      }

      const checkError = totalErrors > maxErrors ? 1 : void 0

      return checkError
    })
  })
})()
