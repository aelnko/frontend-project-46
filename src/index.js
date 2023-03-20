import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const getData = (filepath) => JSON.parse(fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', filepath)));

const genDiff = (filepath1, filepath2) => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);
  const tree = _.union(Object.keys(data1).concat(Object.keys(data2))).sort()
    .map((key) => {
      if (Object.hasOwn(data1, key) && !Object.hasOwn(data2, key)) {
        return { key, value: data1[key], type: 'deleted'};
      }
      if (!Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
        return { key, value: data2[key], type: 'added'};
      }
      if (data1[key] !== data2[key]) {
        return { key, oldValue: data1[key], newValue: data2[key], type: 'changed'};
      }
      return { key, value: data1[key], type: 'not changed' }
    });
  const result = tree.map((item) => {
    switch (item.type) {
      case 'deleted':
        return `  - ${item.key}: ${item.value}`;
      case 'added': 
        return `  + ${item.key}: ${item.value}`;
      case 'changed':
        return [[`  - ${item.key}: ${item.oldValue}`], [`  + ${item.key}: ${item.newValue}`]].flat();
      case 'not changed':
        return `    ${item.key}: ${item.value}`
    }
  }).flat().join('\n');
  return `{\n${result}\n}`
};

export default genDiff;