
//input  -> "A man, a plan, a canal: Panama"
//Output ->  true
const isPalindrome = (s) =>{
    a = s.toLowerCase().replace(/[^a-zA-Z0-9]/g , ""),
    b = a.split("").reverse().join("");
    return a === b
};

// Input ->  "race a car"
// Output ->  false
const  isPalindrome = (s) => {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g , "");
    return s === s.split("").reverse().join("") 
};

