const levelOrderBottom = (root) =>  {  
    if(!root) return []
    
    let ress = [], queue =[root];
    
    while(queue.length > 0){
        let data =[], len = queue.length; 
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            data.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        ress.push(data)
    }
    return ress.reverse()



};

