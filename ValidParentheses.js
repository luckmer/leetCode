// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "()[]{}"
// Output: true
// Example 3:
// Input: s = "(]"
// Output: false
// Example 4:
// Input: s = "([)]"
// Output: false
// Example 5:
// Input: s = "{[]}"
// Output: true

const  isValid =(s) =>  {
 const data =[]
 
 const legends = {
     "(":"(",
      '{':'{',
     '[':'['
 }
 
 const check = {
    '(': ')',
     '{': '}',
     '[': ']'
 }
 
 for(let i  = 0 ; i < s.length ; i++){
    const char = s[i]
     if(legends[char] === char){
         data.push(char)
     }else if (check[data.pop()] !== s[i]) {
         return false
        }
     }
    return data.length ? 0 : 1 
};
