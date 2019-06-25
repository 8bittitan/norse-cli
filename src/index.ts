#!/usr/bin/env node

import program from 'commander'

program
  .version('0.0.5')
  .command('model <modelName> [fields...]', 'Create a new Mongoose model')
  .command(
    'controller <controllerName> [methods...]',
    'Create a new controller with supplied methods',
  )
  .parse(process.argv)

if (program.args.length === 0) {
  program.help()
}
