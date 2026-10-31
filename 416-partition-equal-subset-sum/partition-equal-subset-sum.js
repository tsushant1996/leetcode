var canPartition = function(nums) {
    let sum = 0;

    for (const num of nums) {
        sum += num;
    }

    if (sum % 2 !== 0) return false;

    const targetSum = sum / 2;

    // -1 = not calculated, 0 = false, 1 = true
    const memo = Array.from(
        { length: nums.length },
        () => new Int8Array(targetSum + 1).fill(-1)
    );

    function combinate(index, remainSum) {
        if (remainSum === 0) return true;
        if (index === nums.length) return false;

        if (memo[index][remainSum] !== -1) {
            return memo[index][remainSum] === 1;
        }

        let possible = false;

        // Choice 1: take nums[index], if it fits.
        if (nums[index] <= remainSum) {
            possible = combinate(index + 1, remainSum - nums[index]);
        }

        // Choice 2: skip nums[index].
        if (!possible) {
            possible = combinate(index + 1, remainSum);
        }

        memo[index][remainSum] = possible ? 1 : 0;
        return possible;
    }

    return combinate(0, targetSum);
};