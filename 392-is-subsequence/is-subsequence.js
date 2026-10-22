/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    if (t.length < s.length) return false;

    let ptr1 = 0;
    let ptr2 = 0;


    while (ptr2 < s.length && ptr1 < t.length) {
        if (s[ptr2] !== t[ptr1]) {
            ptr1++;
        }
        else {
            ptr1++;
            ptr2++
        }
    }

    return ptr2 === s.length;
};