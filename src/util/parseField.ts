import chalk from 'chalk'

const makeKeyValue = (attributes: string[]) => ({
  name: attributes[0],
  type: attributes[1],
})

export default (field: string) => {
  const s = field.split(':')

  if (s.length === 1) {
    s[1] = 'String'
  }

  if (s.length !== 2) {
    console.log(
      chalk.red(
        'Your field must be in the format of `[fieldName]:[fieldType]`',
      ),
    )
    process.exit(1)
  }

  return makeKeyValue(s)
}
