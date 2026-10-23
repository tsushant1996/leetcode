/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    if(height.length < 2) return 0

    let rightArr = new Array(height.length).fill(0);
    rightArr[0] = height[0];

    for (let i = 1; i < height.length; i++) {
        rightArr[i] = Math.max(rightArr[i-1], height[i]);
    }

    leftMax = 0

    let totalWater = 0;

    for (let i = height.length-1; i >= 0; i--) {
        leftMax = Math.max(leftMax, height[i]);

        let min = Math.min(leftMax, rightArr[i]);

        let waterTrapped = Math.max(0, min - height[i]);

        totalWater += waterTrapped;
    }

    return totalWater;
    
};