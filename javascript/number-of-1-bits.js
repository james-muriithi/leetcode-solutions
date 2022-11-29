/**
 * https://leetcode.com/problems/number-of-1-bits/submissions/
 * 
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    return n.toString(2).replaceAll('0', '').length
};