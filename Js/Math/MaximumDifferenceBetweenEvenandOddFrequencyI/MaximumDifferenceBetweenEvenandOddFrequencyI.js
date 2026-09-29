// You are given a string s consisting of lowercase English letters.
// Your task is to find the maximum difference diff = freq(a1) - freq(a2) between the frequency of characters a1 and a2 in the string such that:
// a1 has an odd frequency in the string.
// a2 has an even frequency in the string.
// Return this maximum difference.
// Example 1:
// Input: s = "aaaaabbc"
// Output: 3
// Explanation:
// The character 'a' has an odd frequency of 5, and 'b' has an even frequency of 2.
// The maximum difference is 5 - 2 = 3.
// Example 2:
// Input: s = "abcabcab"
// Output: 1
// Explanation:
// The character 'a' has an odd frequency of 3, and 'c' has an even frequency of 2.
// The maximum difference is 3 - 2 = 1.

/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
  const freq = {};
  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let maxOdd = 0;
  let minEven = Infinity;

  for (const count of Object.values(freq)) {
    if (count % 2 === 1) {
      maxOdd = Math.max(maxOdd, count);
    } else {
      minEven = Math.min(minEven, count);
    }
  }

  if (minEven === Infinity) {
    minEven = 0;
  }

  return maxOdd - minEven;
};
