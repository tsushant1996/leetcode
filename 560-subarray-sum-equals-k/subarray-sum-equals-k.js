/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

    const prefix = new Map([[0, 1]]);

    let sum = 0;
    let count = 0;


    for (let num of nums) {
        sum += num;

        count += prefix.get(sum - k) || 0;

        prefix.set(sum , (prefix.get(sum) || 0) + 1)

    }
    return count;
    
};