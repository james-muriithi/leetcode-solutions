/**
 * https://leetcode.com/problems/count-operations-to-obtain-zero/submissions/
 * 
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
 var countOperations = function(num1, num2) {
    if (num1 == 0 || num2 == 0) return 0
    let count = 0;
    while (Math.abs(num1- num2) >= 0) {
        count++;
        if(num1 > num2) {
            num1 -= num2
        } else if(num1 < num2) {
            num2 -= num1
        } else {
            break;
        }
    }
    
    return count
    
};