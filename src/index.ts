#!/usr/bin/env node

import program from 'commander'

import model from './model'

program.version('0.0.5')

program.command('g <modelName> [fields...]').action(model)

program.parse(process.argv)
