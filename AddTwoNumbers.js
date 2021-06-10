// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


const  addTwoNumbers =  (l1, l2) =>  {
  let List = new ListNode(0);
  let curr = List;
  let count = 0;

    while (l1 || l2) {
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    let sum = count + x + y;
    count = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (count > 0) curr.next = new ListNode(count);
  return List.next;
};
