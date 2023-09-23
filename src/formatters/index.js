/* eslint-disable import/extensions */
import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatters = {
  stylish,
  plain,
  json,
};

const formatter = (ast, format) => formatters[format](ast);

export default formatter;
