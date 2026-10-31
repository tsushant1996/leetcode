/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {

    let n = cost.length;

    let costArr = new Array(cost.length).fill(0);

    costArr[0] = cost[0];
    costArr[1] = cost[1];

    for (let i = 2; i < cost.length; i++) {
        costArr[i] = Math.min(costArr[i-1] + cost[i], costArr[i-2] + cost[i]);
    }

    return Math.min(costArr[n-2], costArr[n-1]);

};