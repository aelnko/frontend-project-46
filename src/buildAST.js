/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
import _ from 'lodash';

const buildTree = (object1, object2) => {
  const result = _.sortBy(
    _.union(
      Object.keys(object1),
      Object.keys(object2),
    ),
  )
    // eslint-disable-next-line array-callback-return
    .map((key) => {
      if (_.isPlainObject(object1[key]) && _.isPlainObject(object2[key])) {
        const children = buildTree(object1[key], object2[key]);
        return {
          key, children, type: 'nested',
        };
      }
      if (!_.has(object2, key)) {
        return { key, type: 'removed', value: object1[key] };
      }
      if (!_.has(object1, key)) {
        return { key, type: 'added', value: object2[key] };
      }
      if (_.has(object1, key) && _.has(object2, key) && object1[key] === object2[key]) {
        return {
          key, type: 'unchanged', value: object1[key],
        };
      }
      if (_.has(object1, key) && _.has(object2, key)) {
        return {
          key, type: 'updated', oldValue: object1[key], newValue: object2[key],
        };
      }
    });
  return result.flat();
};

export default buildTree;
