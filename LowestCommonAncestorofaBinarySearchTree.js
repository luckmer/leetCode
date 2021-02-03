// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6

const lowestCommonAncestor = (root, p, q) =>{
    if((root.val - p.val) *(root.val -q.val) <= 0 ){
        return root
    }
    return lowestCommonAncestor(p.val < root.val ? root.left: root.right , p,q)
};