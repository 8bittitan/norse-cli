#!/usr/bin/env node

import program from 'commander'

program
  .version('1.0.0')
  .command('model <modelName> [fields...]', 'Create a new Mongoose model')
  .command(
    'controller <controllerName> [methods...]',
    'Create a new controller with supplied methods',
  )
  .command(
    'scaffold <scaffoldName> [fields...]',
    'Create a full scaffold of the model and related controller',
  )
  .parse(process.argv)

if (program.args.length === 0) {
  program.help()
}
