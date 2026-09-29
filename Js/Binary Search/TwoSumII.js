// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]

// Input: numbers = [-1,0], target = -1
// Output: [1,2]

const twoSum = (numbers, target) => {
    // 1
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] == target) return [i + 1, j + 1];
        }
    }

    // 2
    let comp = {};
    for (let i = 0; i < numbers.length; i++) {
        if (comp[numbers[i]] >= 0) {
            return [comp[numbers[i]], i + 1];
        }
        comp[target - numbers[i]] = i + 1;
    };
    
};
