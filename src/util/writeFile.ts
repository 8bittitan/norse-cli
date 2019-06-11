import chalk from 'chalk'
import fs from 'fs-extra'

export default (outPath: string, data: string | Buffer) =>
  new Promise(resolve => {
    fs.outputFile(outPath, data, err => {
      if (err) {
        console.log(chalk.red(`[${err.name}] ${err.message}`))
      } else {
        resolve()
      }
    })
  })
