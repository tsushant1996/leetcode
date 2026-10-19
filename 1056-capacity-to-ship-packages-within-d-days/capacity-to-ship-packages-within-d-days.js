/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {


    function checkCapacity(num) {
        let totalWeight = 0;
        let currDay = 1;

        for (let currWeight of weights) {

            if (currWeight > num) return false;

            if (totalWeight + currWeight > num) {
                currDay++;
                totalWeight = currWeight;
            }
            else totalWeight += currWeight;
        }

        return currDay <= days;
    }

    let maxRight = weights.reduce((sum, w) => sum + w, 0);

    
    let left = 1;
    let right = maxRight;

    let ans = -1;

    while (left < right) {
        let mid = Math.floor((left + right)/2);
        if (checkCapacity(mid)) {
            ans = mid;
            right = mid;
        }
        else left = mid + 1;
    }

    return left

};