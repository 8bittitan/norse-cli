#!/usr/bin/env node

import program from 'commander'

import model from './model'

const collect = (value: any, prevValue: [any]) => prevValue.concat(value)

program.version('0.0.2')

program
  .command('g <modelName>')
  .option(
    '-f, --fields [fields]',
    'Mongoose schema field and type (username:string)',
    collect,
    [],
  )
  .action(model)

program.parse(process.argv)
