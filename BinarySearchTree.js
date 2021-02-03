/** @format */

//Leetocde   https://leetcode.com/Luckmer/

let root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5],
    p = 2,
    q = 8;

const One = (root, p, q) => {
    // p.val = 2 ,
    // q.val = 8,
    // root.val = 6
    if (p.val > root.val && q.val > root.val) {
        root = root.right;
    } else if (p.val < root.val && q.val < root.val) {
        root = root.left;
    }
    //output 6
    console.log(root);
};

//2
const Two = (root, p, q) => {
    // p.val = 2 ,
    // q.val = 8,
    // root.val = 6
    if (p.val > root.val && q.val > root.val) {
        return Two(root.right, p, q);
    } else if (p.val < root.val && q.val < root.val) {
        return Two(root.left, p, q);
    }
    //output 6
    return root;
};

const four = (root, p, q) => {
    // p.val = 2 ,
    // q.val = 8,
    // root.val = 6
    while (true) {
        if ((root.val - p.val) * (root.val - q.val) <= 0) {
            return root;
        }
        return four(p.val < root.val ? root.left : root.right, p, q);
    }

    //oneline 
    (root.val - p.val) * (root.val - q.val) <= 0
    ? root
        : three(p.val < root.val ? root.left : root.right, p, q);
    
};




const isSymmetric =  (root) => isSameTree(root,root)
    
const isSameTree =  (p, q) => !p || !q ? p === q :   
    p.val === q.val 
    && isSameTree(p.right , q.left) 
    && isSameTree(p.left, q.right)
    





