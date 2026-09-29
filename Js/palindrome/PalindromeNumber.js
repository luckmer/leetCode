const isPalindrome = (x) =>{
    let a = 0
    let b = x 
    let c = 0
    
    while(x > 0){
        // a = x%10;
        // x = parseInt(x /10);
        // c *= 10;
        // c+= a
        c = (c * 10 ) + (x % 10 );
        x = parseInt(x /10)
    }
    return b ===c ? true : false
    
};
