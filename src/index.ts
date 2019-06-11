#!/usr/bin/env node

import program from 'commander'

import model from './model'

const collect = (value: any, prevValue: [any]) => prevValue.concat(value)

program.version('1.0.1')

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
