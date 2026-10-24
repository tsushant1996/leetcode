/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

    if (s1.length > s2.length) return false;

    let need = {};
    let window = {};

    for (let ch of s1) {
        need[ch] = (need[ch] || 0) + 1
    }

    let left = 0;

    for (let right = 0; right < s2.length; right++) {
        let ch = s2[right];

        window[ch] = (window[ch] || 0) + 1;

        if ((right - left + 1) > s1.length) {
            let remove = s2[left];
            window[remove]--;
            left++;
        }

        if ((right - left + 1) === s1.length) {
            if (matches(window, need)) return true;
        }

    }

    function matches(window, need) {
        let alpha = "abcdefghijklmnopqrstuvwxyz"

        for (let ch of alpha) {
            if ( (window[ch] || 0) !== (need[ch] || 0)) return false;
        }
        return true;
    }

    return false
}