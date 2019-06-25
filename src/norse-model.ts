#!/usr/bin/env node

import program from 'commander'

import modelHandler from './handlers/modelHandler'

program.parse(process.argv)

const [modelName, ...fields] = program.args

modelHandler(modelName, fields)
