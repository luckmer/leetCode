// In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.
// Example 1:
// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
// Example 2:
// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
// Example 3:
// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).


const Update = (char, i, Sort) => {
  let C = char[i];
  C = Sort[C];
  return C;
};

var isAlienSorted = function(words, order) {
  const Sort = {};
  const Result = [];

  for (let i = 0; i < [...order].length; i++) {
    if (order[i]) {
      const Words = String.fromCharCode(i + 97);

      Sort[order[i]] = Words;
    }
  }

  for (let i = 0; i < words.length; i++) {
      
    const char = words[i];
    const Arr = [];

    for (let i = 0; i < char.length; i++) {
      let C = Update(char, i, Sort);
      Arr.push(C);
    }

    const Join = Arr.join("");

    Result.push(Join);
  }

  return Result.join() === Result.sort().join();
};
