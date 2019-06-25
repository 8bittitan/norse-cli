import chalk from 'chalk'
import njk from 'nunjucks'
import path from 'path'

import Config from './config'
import parseField from './util/parseField'
import p from './util/prettier'
import writeFile from './util/writeFile'

export default async (modelName: any, fields: string[]) => {
  const config = new Config()
  const ext = config.getFileExtension()
  const targetDir = config.getModelsDirectory()
  const outPath = path.join(targetDir, `${modelName}.${ext}`)
  const env = new njk.Environment(
    new njk.FileSystemLoader(path.join(__dirname, 'templates')),
  )

  const schemaFields: any = []

  console.log(fields)

  fields.forEach((field: string) => {
    schemaFields.push(parseField(field))
  })

  let s = env.render('model.njk', { modelName, schemaFields })

  if (config.getPrettier()) {
    console.log(chalk.green('Prettier Started!'))

    s = p(s, config.getPrettierConfig())

    console.log(chalk.green('Prettier finished!'))
  }

  await writeFile(outPath, s)

  console.log(chalk.green(`Wrote file ${modelName}.${ext} in \`${targetDir}\``))
}
