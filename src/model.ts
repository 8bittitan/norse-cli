import chalk from 'chalk'
import njk from 'nunjucks'
import path from 'path'

import Config from './config'
import parseField from './util/parseField'
import p from './util/prettier'
import writeFile from './util/writeFile'

export default async (modelName: any, { fields }: any) => {
  const config = new Config()
  const outPath = path.join(config.getModelsDirectory(), `${modelName}.js`)
  const env = new njk.Environment(
    new njk.FileSystemLoader(path.join(__dirname, 'templates')),
  )

  const schemaFields: any = []

  fields.forEach((field: string) => {
    schemaFields.push(parseField(field))
  })

  let s = env.render('model.njk', { modelName, schemaFields })

  if (config.getPrettier()) {
    s = p(s, config.getPrettierConfig())
  }

  await writeFile(outPath, s)

  console.log(chalk.green(`Wrote file ${modelName}.js`))
}
