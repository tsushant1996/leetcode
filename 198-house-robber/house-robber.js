/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    let n = nums.length;

    if (n === 1) return nums[0];
    let prev2 = nums[0];
    let prev1 = Math.max(prev2, nums[1]);


    for (let i = 2; i < n; i++) {
        let current = Math.max(prev2 + nums[i], prev1);
        prev2 = prev1;
        prev1 = current;
    }

    console.log("prev2", prev2);
    console.log("prev1", prev1)

    return Math.max(prev2, prev1)

   
    /*
    nums = [1, 2, 3, 1];
    maxRob = [
    1,
    2
    4,
    4
    ]

    */
};