const lengthOfLastWord = (s) => {
    let  n = s.trim().split(" ");
    return  n[n.length - 1].length;  
};