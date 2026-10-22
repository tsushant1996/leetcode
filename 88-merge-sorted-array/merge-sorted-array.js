/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    let firstPtr = m - 1;
    let secondPtr = n - 1;
    let writePtr = nums1.length-1;

    while(firstPtr >= 0 && secondPtr >= 0) {
        if (nums1[firstPtr] < nums2[secondPtr]) {
            nums1[writePtr] = nums2[secondPtr];
            secondPtr--;
        }
        else {
            nums1[writePtr] = nums1[firstPtr];
            firstPtr--;
        }
        writePtr--;
    }

    while (secondPtr >= 0) {
        nums1[writePtr] = nums2[secondPtr];
        secondPtr--
        writePtr--
    }
    
};