/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    let stack = [];


    let arr = s.split(" ");


    for (let word of arr) {
        if (word.length) {
            stack.push(word);
        }
    }

    let reverseStr = ""

    while (stack.length) {
        
        reverseStr += stack.pop();
        if (stack.length) reverseStr += " ";
    }    

    return reverseStr;
};