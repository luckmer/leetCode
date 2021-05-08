const maxDepth = (s) =>  {
    let count1 = 0 , count2 = 0;
    
    for(let i of s){
        if(i === "("){
            count1++
        }
        if(i === ")"){
            count1--
        }
        
        if(count1 > count2){
            count2 = count1
        }
    }
    
    return count2
};
