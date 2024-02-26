const json = (ast) => {
  const treeForJson = {
    key: 'root',
    type: 'nested',
    children: ast,
  };
  return JSON.stringify(treeForJson, null, '  ');
};

export default json;
