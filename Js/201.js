// Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.
// Example 1:
// Input: left = 5, right = 7
// Output: 4
// Example 2:
// Input: left = 0, right = 0
// Output: 0
// Example 3:
// Input: left = 1, right = 2147483647
// Output: 0

// Constraints:

// 0 <= left <= right <= 231 - 1

var rangeBitwiseAnd = function(left, right) {
//           if (left === 0  ||  right === 0 ) return 0;
    
//  if (Math.log2(left) != Math.log2(right)) return 0;    
    
//     let res = left;
//     for(let i = left ; i <= right ; i++){
        
//         res &= i
//     }    
//     return res
    
    let counter = 0
    
    
    while(left !== right ){
        
        left >>= 1
        right >>=1 
        
        counter +=1
        
        
    }  
    
    
    
    return  left << counter
};
