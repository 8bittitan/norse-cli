import fs from 'fs-extra'
import path from 'path'

import defaultConfig from './defaultConfig.json'

interface Config {
  config: {
    [key: string]: any
  }
  prettierConfig: any
}

const currentDir = process.cwd()

const getConfig = () => {
  try {
    const userConfig = fs.readFileSync(path.join(currentDir, 'norse.json'), {
      encoding: 'utf8',
    })

    if (userConfig) {
      const parsedUserConfig = JSON.parse(userConfig)

      return {
        ...defaultConfig,
        ...parsedUserConfig,
        fromUserConfig: true,
      }
    }

    return defaultConfig
  } catch (err) {
    return defaultConfig
  }
}

class Config {
  constructor() {
    this.config = getConfig()
  }

  public getModelsDirectory() {
    return this.config.modelsDirectory
  }

  public getControllersDirectory() {
    return this.config.controllersDirectory
  }

  public getPrettier() {
    try {
      const prettierUrl = path.join(currentDir, '.prettierrc')
      const canRunPrettier = !this.config.fromUserConfig || this.config.prettier
      const prettierConfig = fs.readFileSync(prettierUrl, { encoding: 'utf8' })

      if (prettierConfig && canRunPrettier) {
        this.prettierConfig = JSON.parse(prettierConfig)
        return true
      } else {
        return false
      }
    } catch (err) {
      return false
    }
  }

  public getPrettierConfig() {
    return this.prettierConfig
  }

  public getFileExtension() {
    return this.config.typescript ? 'ts' : 'js'
  }

  public getScaffoldDirectories() {
    return [this.getModelsDirectory(), this.getControllersDirectory()]
  }
}

export default Config
