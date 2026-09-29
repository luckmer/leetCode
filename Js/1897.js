// You are given an array of strings words (0-indexed).
// In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j].
// Return true if you can make every string in words equal using any number of operations, and false otherwise.
// Example 1:
// Input: words = ["abc","aabc","bc"]
// Output: true
// Explanation: Move the first 'a' in words[1] to the front of words[2],
// to make words[1] = "abc" and words[2] = "abc".
// All the strings are now equal to "abc", so return true.
// Example 2:
// Input: words = ["ab","a"]
// Output: false
// Explanation: It is impossible to make all the strings equal using the operation.

const makeEqual = (words) => {
  if (!words.length) return false;
  const options = {};

  const test = words.map((el) => el.split(""));

  const items = test
    .map((category) => category)
    .reduce((prev, current) => [...prev, ...current])
    .map((e) => e);

  items.forEach((element) => (options[element] = (options[element] || 0) + 1));

  for (let key in options) {
    if (options[key] % words.length) return false;
  }

  return true;
};
