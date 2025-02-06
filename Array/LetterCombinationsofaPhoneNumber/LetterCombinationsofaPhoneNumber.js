// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

const alphabet = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

const letterCombinations = (digits) => {
  if (!digits.length) return [];

  let prev = [""];

  for (let i = 0; i < digits.length; i++) {
    const temp = alphabet[digits[i]];
    const temp2 = [];

    for (let j = 0; j < temp.length; j++) {
      for (let k = 0; k < prev.length; k++) {
        temp2.push(prev[k] + temp[j]);
      }
    }

    prev = temp2;
  }

  return prev;
};

const letterCombinations2 = (digits) => {
  if (!digits) return [];

  return digits
    .split("")
    .reduce(
      (a, b) => alphabet[b].split("").flatMap((c) => a.map((d) => d + c)),
      [""]
    );
};

console.log(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("")); // []
