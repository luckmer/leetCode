Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

const Helper = (i,j,s) =>{
  while (i < j) {
    if (s.charAt(i) != s.charAt(j)) return false;
    ++i;
    --j;
  }

  return true;
}

const countSubstrings = (s) =>  {
    let calc = 0
    
    for(let i =  0 ; i < s.length ; i++){
        for(let j = i ; j < s.length ; j++){
            calc += Helper(i,j,s) ? 1 : 0
        }
    }
    
return calc    
};
