/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {

    if (s.length == 1) return 1

    let count = 0;

    function isPalindrome(i, j) {
        if (i >= j) return true;

        if (s[i] !== s[j]) return false;

        return isPalindrome(i+1, j-1);
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (isPalindrome(i, j)) count++
        }
    }

    return count;

    // for (let center = 0; center < s.length; center++) {
    //     expandAroundCenter(center, center);
    //     expandAroundCenter(center, center + 1);
    // }

    // function expandAroundCenter(left, right) {
    //     while (left >= 0 && right < s.length && s[left] === s[right]) {
    //         count++
    //         left--;
    //         right++
    //     }
    // }
    // return count;
    
};