/**
 * https://leetcode.com/problems/add-digits/submissions/
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    while(num.toString().length > 1) {
        num = num.toString().split('').reduce((ac, cV) => +ac + +cV, 0)
    }
    
    return num;
};