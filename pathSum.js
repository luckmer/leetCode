const pathSum = (root, targetSum) => {
  const result = [];
  const index = 0;
  const queue = [];

  function dfs(node, sum, path) {
    if (!node) return;

    sum += node.val;
    path.push(node.val);

    if (!node.left && !node.right) {
      if (sum === targetSum) {
        result.push(path);
      }
      return;
    }

    dfs(node.left, sum, [...path]);
    dfs(node.right, sum, [...path]);
  }

  dfs(root, index, queue);

  return result;
};
