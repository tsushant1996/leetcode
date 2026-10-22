/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    

    nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {


        if (nums[i] > 0) break;

        if (i > 0 && nums[i] === nums[i-1]) continue;

        let left = i + 1;
        let right = nums.length-1;

        while (left < right) {

            let totalSum = nums[left] + nums[right] + nums[i];

            if (totalSum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                while (left < nums.length &&nums[left] === nums[left+1]) {
                    left++;
                }

                while (right > i + 1 && nums[right] === nums[right-1]) {
                    right--
                }

                left++;
                right--;
            }

            else if (totalSum > 0) {
                right--;
            }
            else {
                left++;
            }

        }
    }


    return result;
};