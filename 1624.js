// Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.
// A substring is a contiguous sequence of characters within a string.
// Example 1:
// Input: s = "aa"
// Output: 0
// Explanation: The optimal substring here is an empty substring between the two 'a's.
// Example 2:
// Input: s = "abca"
// Output: 2
// Explanation: The optimal substring here is "bc".
// Example 3:
// Input: s = "cbzxy"
// Output: -1
// Explanation: There are no characters that appear twice in s.
// Example 4:
// Input: s = "cabbac"
// Output: 4
// Explanation: The optimal substring here is "abba". Other non-optimal substrings include "bb" and "".


const maxLengthBetweenEqualCharacters = (s) => {
//   const last = s.split("").pop()
//   const first = s.split("").shift()
//   let max= 0
//   console.log(first)
  
//   for(let i = 0 ; i < s.length; i++){
//     const char = s[i];
    
//     if(last !== char){
//       console.log(i)
//       max =Math.max(max, char)
//     }
//   }
  
//   return max -1 
  
  const obj = {}
  let counter = -1
  
  const helper = (arr,work) =>   arr.split("").forEach(work);
  
  helper(s,(el,index)=> obj[el] = index  )
   helper(s,(el,index)=> counter = Math.max(counter, obj[s[index]] - index -1  ) )
  
  return counter 
};
