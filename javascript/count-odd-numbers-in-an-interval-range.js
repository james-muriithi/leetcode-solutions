/**
 * https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/submissions/
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var countOdds = function(low, high) {
    let count = 0;
    for (let i = low; i <= high;) {
        if(i %2 !== 0) count++;
        i += i %2 !== 0 ? 2 : 1;
    }
    return count
};