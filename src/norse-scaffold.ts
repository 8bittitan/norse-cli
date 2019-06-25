#!/usr/bin/env node

import program from 'commander'

import scaffoldHandler from './handlers/scaffoldHandler'

program.parse(process.argv)

const [scaffoldName, ...fields] = program.args

scaffoldHandler(scaffoldName, fields)
