// Given an integer n, add a dot (".") as the thousands separator and return it in string format.
// Example 1:
// Input: n = 987
// Output: "987"
// Example 2:
// Input: n = 1234
// Output: "1.234"
// Example 3:
// Input: n = 123456789
// Output: "123.456.789"
// Example 4:
// Input: n = 0
// Output: "0"

const  thousandSeparator =(n)=> {
//   let result = "";
//   const String = n.toString().match(/.{1,3}/g);
//   String.forEach((el) => (result += `${el}.`));
//   while (result[result.length - 1] === ".") result = result.slice(0, -1);
//   return result;  
  if (!n) return "0";
  let arr = [];
  n = n.toString();

  for (let i = n.length - 1; i >= 0; i--) {
    (n.length - i) % 3 == 0 && i != 0 ? arr.push(n[i], ".") : arr.push(n[i]);
  }
  return arr.reverse().join("");
};
