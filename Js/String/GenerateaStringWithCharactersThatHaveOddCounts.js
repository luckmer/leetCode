/**
 * @param {number} n
 * @return {string}
 */

const generateTheString = (n) => {
  let output = "";
  for (let i = 1; i <= n; i++) {
    output += i === n && i % 2 === 0 ? "p" : "z";
  }

  return output;
};

console.log(generateTheString(4));
console.log(generateTheString(2));
console.log(generateTheString(7));
