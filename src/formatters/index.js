/* eslint-disable import/extensions */
import stylish from './stylish.js';
import plain from './plain.js';

const formatters = {
  stylish,
  plain,
};

const formatter = (ast, format) => formatters[format](ast);

export default formatter;
