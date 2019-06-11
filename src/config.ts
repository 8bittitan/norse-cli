import fs from 'fs-extra'
import path from 'path'

import chalk from 'chalk'
import defaultConfig from './defaultConfig.json'

interface Config {
  config: any
  prettierConfig: any
}

const currentDir = process.cwd()

const getConfig = () => {
  const userConfig = fs.readFileSync(path.join(currentDir, 'norse.json'), {
    encoding: 'utf8',
  })

  if (userConfig) {
    return JSON.parse(userConfig)
  }

  return defaultConfig
}

class Config {
  constructor() {
    this.config = getConfig()
  }

  public getModelsDirectory() {
    return this.config.modelsDirectory
  }

  public getPrettier() {
    if (this.config.prettier) {
      try {
        const prettierConfig = fs.readFileSync(
          path.join(currentDir, '.prettierrc'),
          { encoding: 'utf8' },
        )

        this.prettierConfig = JSON.parse(prettierConfig)

        return true
      } catch (err) {
        console.log(
          chalk.red('No `.prettierrc` file found, skipping formatting.'),
        )
        return false
      }
    }

    return false
  }

  public getPrettierConfig() {
    return this.prettierConfig
  }
}

export default Config
