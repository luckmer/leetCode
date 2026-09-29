// Given the head of a singly linked list, return true if it is a
// palindrome
//  or false otherwise.
// Example 1:
// Input: head = [1,2,2,1]
// Output: true
// Example 2:
// Input: head = [1,2]
// Output: false
// Constraints:
// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9
// Follow up: Could you do it in O(n) time and O(1) space?

const Reverse = (data) => {
  let ret = new Array();

  for (let i = data.length; i >= 0; i--) {
    ret.push(data[i]);
  }
  return ret.join("");
};

const isPalindrome = (head) => {
  const array = [];
  while (head) {
    array.push(head.val);
    head = head.next;
  }

  return array.join("") === Reverse(array);
};
