// Input: a = "11", b = "1"
// Output: "100"

// Input: a = "1010", b = "1011"
// Output: "10101"

const addBinary =(a,b)=> {
 let result = "";
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
    
  while (i >= 0 || j >= 0 || carry > 0) {
    const x = parseInt(a[i], 10) || 0;
    const y = parseInt(b[j], 10) || 0;
    const z = x + y + carry;
    i--, j--;
    if (z > 3 || z < 0) return 
    result = z === 3 || z === 1 ? 1 + result : 0 + result;
    carry = z < 2 ? 0 : 1;
  }

  return result;
    

};
