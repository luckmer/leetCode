// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

const lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let r = 0 , l = 0 , max = 0 
    
    
    while(r < s.length ){
        if(!set.has(s[r])){
            set.add(s[r])
            r++
            max = Math.max(max, set.size)
        }else{
            set.delete(s[l])
            l++
        }
    }
    return max
    
};
