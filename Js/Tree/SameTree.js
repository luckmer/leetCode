// Input: p = [1,2,3], q = [1,2,3]
// Output: true

const isSameTree = (p, q) => !p || !q ? 
    p == q : p.val == q.val
    && isSameTree(p.left, q.left) 
    && isSameTree(p.right, q.right);