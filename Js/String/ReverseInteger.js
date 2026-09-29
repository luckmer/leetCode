// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

const reverse = (x) => {
  const isNegative = x < 0;

  const value = Math.abs(x);
  const response = value.toString().split("").reverse().join("");
  const result = isNegative ? -1 * parseInt(response) : parseInt(response);

  return result < Math.pow(-2, 31) || Math.pow(2, 31) < result ? 0 : result;
};

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(1534236469)); // 0
