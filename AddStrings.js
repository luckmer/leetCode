// Input: num1 = "11", num2 = "123"
// Output: "134"

// Input: num1 = "456", num2 = "77"
// Output: "533"

// Input: num1 = "0", num2 = "0"
// Output: "0"

const addStrings = (num1, num2) =>{
    let i = num1.length - 1,
        j = num2.length - 1,
        carry = 0,
        result = "";
 
    while(i >=0 || j >=0){
        const x = parseInt(num1[i]) || 0 ;
        const y = parseInt(num2[j]) || 0 ;
        const z = x + y + carry ;
        const calc = z % 10;
        carry = Math.floor(z / 10); 
        result = calc + result 
        i--,j--
    }
  if (carry == 1) result = carry + result ;
  return result;
}
