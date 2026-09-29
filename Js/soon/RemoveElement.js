const removeElement = (nums, val)=> {
    let counter = 0 
    nums.forEach(j => j !== val ? nums[counter++] = j : "");
    return counter
};