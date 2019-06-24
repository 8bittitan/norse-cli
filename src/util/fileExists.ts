import fs from 'fs-extra'

export default (url: string) => fs.statSync(url).isFile()
