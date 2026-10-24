/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    let longComPrefix = ""
    let shortestWord = strs.sort((a, b) => a.length - b.length)[0];

    console.log("shorte", shortestWord)

    for (let i = 0; i < shortestWord.length; i++) {
        let ch = shortestWord[i];

        for (let j = 0; j < strs.length; j++) {
            let ch2 = strs[j][i];

            if (ch !== ch2) return longComPrefix;
        }

        console.log("ch", ch)

        longComPrefix += ch;
    }

    return longComPrefix;

};