const lengthOfLastWord = (s) => {
    let  n = s.trim().split(" ");
    return  n[n.length - 1].length;  
};


const lengthOfLastWord = (s) => {   
    s= s.trim();
    return s.indexOf(' ') >= 0 ? s.slice(s.lastIndexOf(' '), s.length - 1).length : s.length
};


const lengthOfLastWord = (s) => s.trim().split(" ").pop().length;

