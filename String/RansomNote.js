// Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

const canConstruct = (ransomNote, magazine) => {
  let map = {};
  for (let i of magazine) map[i] = (map[i] || 0) + 1;

  for (let i of ransomNote) {
    if (!map[i]) return false;
    map[i] -= 1;
  }
  return true;
};
