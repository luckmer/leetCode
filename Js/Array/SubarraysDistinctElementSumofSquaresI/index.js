/**
 * @param {number[]} nums
 * @return {number}
 */
const sumCounts = (nums) => {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    const set = new Set();

    for (let j = i; j < nums.length; j++) {
      set.add(nums[j]);
      sum += set.size ** 2;
    }
  }

  return sum;
};

console.log(sumCounts([1, 2, 1]));

console.log(sumCounts([1, 1]));
