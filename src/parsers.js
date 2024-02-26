/* eslint-disable import/no-extraneous-dependencies */
import yaml from 'js-yaml';

const parsers = {
  yml: yaml.load,
  yaml: yaml.load,
  json: JSON.parse,
};

const parse = (filepath, format) => parsers[format](filepath);

export default parse;
