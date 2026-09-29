// Input: root = [3,0,0]
// Output: 2
// Explanation: From the root of the tree, we move one coin to its left child, and one coin to its right child.

// Input: root = [0,3,0]
// Output: 3
// Explanation: From the left child of the root, we move two coins to the root [taking two moves].  Then, we move one coin from the root of the tree to the right child.

// Input: root = [1,0,2]
// Output: 2

// Input: root = [1, 0, 0, null, 3];
// Output: 4;

const distributeCoins = (root) => {
  let counter = 0;

  const dfs = (node) => {
    if (!node) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);

    counter += Math.abs(left) + Math.abs(right);
    return node.val + left + right - 1;
  };

  dfs(root);
  return counter;
};
