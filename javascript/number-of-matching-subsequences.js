/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
    const matches = words.map(word => {
        let exists = true
        let lastIndex = -1;
        
        for (let letter of word) {
            let index = s.indexOf(letter, lastIndex + 1);
            if (index < lastIndex) {
                exists = false;
                break;
            }
            lastIndex = index
        }

        return exists
    })

    return matches.filter(match => match).length
};

/**
 * Runtime: 174 ms, faster than 81.41% of JavaScript online submissions for Number of Matching Subsequences.
 * Memory Usage: 51.2 MB, less than 61.57% of JavaScript online submissions for Number of Matching Subsequences.
 */