// You are given an integer n.
// Each number from 1 to n is grouped according to the sum of its digits.
// Return the number of groups that have the largest size.
// Example 1:
// Input: n = 13
// Output: 4
// Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
// [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9].
// There are 4 groups with largest size.
// Example 2:
// Input: n = 2
// Output: 2
// Explanation: There are 2 groups [1], [2] of size 1.

var countLargestGroup = function (n) {
  const groups = {};

  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (const digit of String(i)) {
      sum += Number(digit);
    }

    groups[sum] = (groups[sum] || 0) + 1;
  }

  const values = Object.values(groups).filter((el) => !!el);
  return values.filter((count) => count === Math.max(...values)).length;
};
