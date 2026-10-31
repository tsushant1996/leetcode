var canPartition = function(nums) {
    let sum = 0;

    for (const num of nums) {
        sum += num;
    }

    if (sum % 2 !== 0) return false;

    const targetSum = sum / 2;
    const memo = Array.from(
        { length: nums.length },
        () => new Array(targetSum + 1).fill(-1)
    );

    function combinate(start, remainSum) {
        // Check invalid and successful states before memo access.
        if (remainSum === 0) return true;
        if (remainSum < 0 || start >= nums.length) return false;

        if (memo[start][remainSum] !== -1) {
            return memo[start][remainSum] === 1;
        }

        for (let i = start; i < nums.length; i++) {
            if (combinate(i + 1, remainSum - nums[i])) {
                memo[start][remainSum] = 1;
                return true;
            }
        }

        memo[start][remainSum] = 0;
        return false;
    }

    return combinate(0, targetSum);
};