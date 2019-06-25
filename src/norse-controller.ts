#!/usr/bin/env node

import program from 'commander'

import controllerHandler from './handlers/controllerHandler'

program.parse(process.argv)

const defaultMethods = ['index', 'create', 'show', 'update', 'destroy']

if (program.args.length === 1) {
  program.args = program.args.concat(...defaultMethods)
}

const [controllerName, ...methods] = program.args

controllerHandler(controllerName, methods)
