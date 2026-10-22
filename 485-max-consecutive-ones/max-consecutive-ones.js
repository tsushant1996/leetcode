/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {

    let streak = 0;
    let maxStreak = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            streak++;
            maxStreak = Math.max(streak, maxStreak);
        }
        else {
          
            streak = 0;
        }
    }

    return maxStreak;
  
};