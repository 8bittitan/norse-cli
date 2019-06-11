const makeKeyValue = (attributes: string[]) => ({
  name: attributes[0],
  type: attributes[1],
})

export default (field: string) => {
  const s = field.split(':')

  if (s.length !== 2) {
    throw new Error(
      'Your field must be in the format of `[fieldName]:[fieldType]`',
    )
  }

  return makeKeyValue(s)
}
