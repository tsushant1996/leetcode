/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let set = new Set();

    let left = 0;
    longestSubstring = 0

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        while (set.has(ch)) {
            set.delete(s[left]);
            left++;
        }
        set.add(ch);
        longestSubstring = Math.max(longestSubstring, i - left + 1);

    }

    return longestSubstring;

};