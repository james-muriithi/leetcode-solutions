/**
 * https://leetcode.com/problems/binary-number-with-alternating-bits/submissions/
 * 
 * @param {number} n
 * @return {boolean}
 */
 var hasAlternatingBits = function(n) {
    const binary = n.toString(2)
    for(let i = 0; i < binary.length;) {
        if(binary[i] == binary[i+1] 
           || (binary[i+2] != undefined && binary[i] != binary[i+2])) return false
        i += 2
    }
    return true
};