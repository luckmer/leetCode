// A wiggle sequence is a sequence where the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with fewer than two elements is trivially a wiggle sequence.

// For example, [1, 7, 4, 9, 2, 5] is a wiggle sequence because the differences (6, -3, 5, -7, 3) are alternately positive and negative.
// In contrast, [1, 4, 7, 2, 5] and [1, 7, 4, 5, 5] are not wiggle sequences, the first because its first two differences are positive and the second because its last difference is zero.
// A subsequence is obtained by deleting some elements (eventually, also zero) from the original sequence, leaving the remaining elements in their original order.

// Input: nums = [1,7,4,9,2,5]
// Output: 6

// Input: nums = [1,17,5,10,13,15,10,5,16,8]
// Output: 7

// Input: nums = [1,2,3,4,5,6,7,8,9]
// Output: 2

const wiggleMaxLength = (nums) => {
  if (nums.length < 2) return nums.length;
  let d = 1,
    p = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      p = d + 1;
    }
    if (nums[i] < nums[i - 1]) {
      d = p + 1;
    }
  }
  return Math.max(d, p);
};
