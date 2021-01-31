let root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 8

const One = (root, p, q) =>{ 
    // p.val = 2 ,
    // q.val = 8,
    // root.val = 6
    if(p.val > root.val && q.val > root.val){
        root = root.right
    }else if(p.val < root.val && q.val < root.val){
        root = root.left
    }
    //output 6 
    console.log(root)
}
