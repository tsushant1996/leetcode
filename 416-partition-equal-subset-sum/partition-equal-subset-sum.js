var canPartition = function(nums) {
    let memo = {};

    let sum = 0;

    for (let num of nums) {
        sum += num
    }

    if (sum % 2 !== 0) return false;

    let target = sum/2;

    function dfs(index, target) {

        if (index === nums.length || target < 0) {
            return false
        }

        

        if (target === 0) {
            return  true
        }

        let key = `${index}-${target}`;

        if (key in memo) return memo[key]

        let partition = dfs(index + 1, target - nums[index]) ||  dfs(index + 1, target);

        memo[key] = partition;
        return memo[key]
    }

    return dfs(0, target);
};