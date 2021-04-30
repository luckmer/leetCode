// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

 

// Example 1:

// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
// Example 2:

// Input: s = "abc1111"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit. 


const secondHighest = (s) =>  {
//      const matches = s.match(/(\d+)/);
// let set = new Set();
//     const Length = matches &&  matches[0].split("").length
//     for(let i = 0 ; i < Length; i++){
//         const numbers = matches[0][i]
//         set.add(numbers)
//     }
// return [...set].sort((a,b)=>b-a)[1] ||-1



let set = new Set();

for (let i =0; i<s.length; i++){
    if (/\d/.test(s[i])) set.add (s[i]);
}

return [...set].sort((a,b)=>b-a)[1] ||-1

};
