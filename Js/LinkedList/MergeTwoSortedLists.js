const mergeTwoLists =(l1, l2) =>{
    if(!l1 || !l2) return l1 || l2
    let node = mergeTwoLists
    
    if(l1.val  < l2.val){
        l1.next = node(l1.next,l2)
        return l1
    }else{
        l2.next = node(l2.next ,l1)
        return l2 
    }
};