// Input: nums = [3,2,1]
// Output: 1
// Explanation: The third maximum is 1.

// Input: nums = [1,2]
// Output: 2
// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.

const thirdMax = (nums) => {
    nums = nums.sort((a,b) => a -b )
    let FindNumber = [...new Set(nums)]
    return FindNumber.length < 3 ? FindNumber[FindNumber.length -1 ]  : FindNumber[FindNumber.length -3 ]
    
    
};
