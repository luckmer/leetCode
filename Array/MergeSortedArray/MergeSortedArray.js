// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

const merge = (nums1, m, nums2, n) => {
  nums1.splice(m, n, ...nums2);
  return nums1.sort((a, b) => a - b);
};

var merge2 = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - n);
  nums1.push(...nums2);
  nums1.length = m + n;
  return nums1.sort((a, b) => a - b);
};
