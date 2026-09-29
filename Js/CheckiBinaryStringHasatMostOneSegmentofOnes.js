// Given a binary string s ​​​​​without leading zeros, return true​​​ if s contains at most one contiguous segment of ones. Otherwise, return false.
// Example 1:
// Input: s = "1001"
// Output: false
// Explanation: The ones do not form a contiguous segment.
// Example 2:

// Input: s = "110"
// Output: true



const  checkOnesSegment =(s) => {
    let calc = 0
    let flag =  false 
    
    for(let i = 0 ; i< s.length ; i++){
        let x = s.charAt(i)
        
        if(x === "0"){
            flag = true
        }
        
        if(flag && x === "1"){
            return false
        }
        
    }
    return true
};
