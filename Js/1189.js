// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.
// Example 1:
// Input: text = "nlaebolko"
// Output: 1
// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:
// Input: text = "leetcode"
// Output: 0


const maxNumberOfBalloons =(text) => {
//     const find = text.split("")
//     const result = [];
//     const word = "balloon"
    
//     for(let words of find){
//         if(word.includes(words)){
//             result.push(words)
//         }
//     }
    
//     // console.log(result.every((el) => word.includes(el)))
    
    
//     if(result.length < 5)return 0
//   return result.length / word.length
    
    const freq = {}
    text  = text.split("")
    text.every((el) => freq[el] =(freq[el] | 0 ) + 1);

return Math.min( freq['b'], freq['a'], ~~(freq['l']/2), ~~(freq['o']/2), freq['n']) || 0    
    
    
};
