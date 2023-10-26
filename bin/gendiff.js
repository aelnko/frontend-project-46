#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import { program } from 'commander';
import genDiff from '../src/index.js';

program
  .version('1.0')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((file1, file2) => {
    console.log(genDiff(file1, file2, program.opts().format));
  });
program.parse();
