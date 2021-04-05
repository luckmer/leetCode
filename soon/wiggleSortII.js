// Given an integer array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

// You may assume the input array always has a valid answer.

// Input: nums = [1,5,1,1,6,4]
// Output: [1,6,1,5,1,4]
// Explanation: [1,4,1,5,1,6] is also accepted.

// Input: nums = [1,3,2,2,3,1]
// Output: [2,3,1,3,1,2]

const wiggleSortII = (nums) => {
  const n = nums.length;
  const sorted = nums.sort((a, b) => a - b);
  const Copy = [...sorted];
  for (let i = 0, j = n - 1, k = Math.floor((n - 1) / 2); i < n; i++) {
    nums[i] = i % 2 === 0 ? Copy[k--] : Copy[j--];
  }
  return sorted;
};
