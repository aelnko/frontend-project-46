/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expectedStylish = fs.readFileSync(getFixturePath('stylish.txt'), 'utf-8');
const expectedPlain = fs.readFileSync(getFixturePath('plain.txt'), 'utf-8');
const expectedJson = fs.readFileSync(getFixturePath('expected.json'), 'utf-8');

const file1 = getFixturePath('file1.json');
const file2 = getFixturePath('file2.json');

const file1yaml = getFixturePath('file1.yaml');
const file2yaml = getFixturePath('file2.yaml');

const file1yml = getFixturePath('file1.yml');
const file2yml = getFixturePath('file2.yml');

test('gendiff', () => {
  expect(gendiff(file1, file2)).toEqual(expectedStylish);
  expect(gendiff(file1yml, file2yaml)).toEqual(expectedStylish);
  expect(gendiff(file1yaml, file2yml)).toEqual(expectedStylish);
  expect(gendiff(file1yaml, file2yaml)).toEqual(expectedStylish);
  expect(gendiff(file1yml, file2yml)).toEqual(expectedStylish);
  expect(gendiff(file1, file2, 'plain')).toEqual(expectedPlain);
  expect(gendiff(file1, file2, 'json')).toEqual(expectedJson);
});
