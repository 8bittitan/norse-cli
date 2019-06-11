import p from 'prettier'

export default (s: string, config: any) => {
  return p.format(s, {
    ...config,
    parser: 'babel',
  })
}
