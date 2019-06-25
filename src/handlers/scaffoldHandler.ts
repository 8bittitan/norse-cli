import chalk from 'chalk'

import controllerHandler from './controllerHandler'
import modelHandler from './modelHandler'

export default async (scaffoldName: string, fields: string[]) => {
  const controllerName = scaffoldName.toLowerCase()
  const defaultMethods = ['index', 'create', 'show', 'update', 'destroy']

  try {
    await Promise.all([
      modelHandler(scaffoldName, fields),
      controllerHandler(controllerName, defaultMethods),
    ])
    chalk.green(`Scaffolding complete`)
  } catch (err) {
    console.log(chalk.red(err.message))
    process.exit(1)
  }
}
