import chalk from 'chalk'
import njk from 'nunjucks'
import path from 'path'

import Config from '../config'
import p from '../util/prettier'
import writeFile from '../util/writeFile'

export default (controllerName: string, methods: string[]) => {
  const config = new Config()
  const ext = config.getFileExtension()
  const targetDir = config.getControllersDirectory()
  const outPath = path.join(
    targetDir,
    `${controllerName.toLowerCase()}Controller.${ext}`,
  )
  const env = new njk.Environment(
    new njk.FileSystemLoader(path.join(__dirname, '..', 'templates')),
  )

  let s = env.render('controller.njk', { methods })

  if (config.getPrettier()) {
    console.log(chalk.blue('Prettier Started!'))

    s = p(s, config.getPrettierConfig())

    console.log(chalk.green('Prettier finished!'))
    console.log('')
  }

  writeFile(outPath, s).then(() => {
    console.log(
      chalk.green(
        `Wrote file ${controllerName.toLowerCase()}Controller.${ext} in \`${targetDir}\``,
      ),
    )
  })
}
