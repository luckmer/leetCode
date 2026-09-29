// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

// Return true if and only if the nodes corresponding to the values x and y are cousins.

 

// Example 1:


// Input: root = [1,2,3,4], x = 4, y = 3
// Output: false
// Example 2:


// Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
// Output: true
// Example 3:



// Input: root = [1,2,3,null,4], x = 2, y = 3
// Output: false


const isCousins = (root, x, y) =>  {
     const queue = [root]
     
     while(queue.length){
         const length = queue.length
         let one = false , two = false
         for(let i = 0 ; i < length ; i++){
                const node = queue.shift()
             
                if(node.left && node.left.val === x && node.right  && node.right.val === y  || 
                   node.left && node.left.val === y && node.right && node.right.val === x) return false
                
                if(node.val === x)one = true
                if(node.val === y) two = true
                
             if(one && two) return true
             if(node.left)queue.push(node.left)
             if(node.right)queue.push(node.right)
         }
         
     }
    return false
};
