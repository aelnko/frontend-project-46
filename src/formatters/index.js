/* eslint-disable import/extensions */
import stylish from './stylish.js';

const formatters = {
  stylish,
};

const formatter = (ast, format) => formatters[format](ast);

export default formatter;
