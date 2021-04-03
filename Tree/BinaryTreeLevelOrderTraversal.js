const levelOrder = (root) =>  {
    if(root === null )return []
    
    let result = [],  queue = [root];
    
    while(queue.length){
        let len = queue.length, data = []; ; 
        for(let i = 0 ; i < len ; i++){
            let node = queue.shift();
            data.push(node.val)
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right)
        }
        result.push(data)
        
    }
    
    return result    
};