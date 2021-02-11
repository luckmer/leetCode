const findMaxConsecutiveOnes = (nums) => {
    let one = 0,
        two = 0;
    for (let i of nums) {
        if (i === 1) {
            one++;
        } else {
            two = Math.max(two, one);
            one = 0;
        }
    }
    return Math.max(two, one);
};
