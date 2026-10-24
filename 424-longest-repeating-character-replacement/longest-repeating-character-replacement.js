/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {   


    let maxFreq = 0;
    let freq = {};
    let maxLen = 0;
    let left = 0;


    for (let i = 0; i  < s.length; i++) {
        let ch = s[i];

        freq[ch] = (freq[ch] || 0) + 1;
        maxFreq = Math.max(maxFreq, freq[ch]);

        while ((i - left + 1) - maxFreq > k) {
            freq[s[left]]--;
            left++;
        }

        maxLen = Math.max(maxLen, i - left + 1);
    }

    return maxLen;
};