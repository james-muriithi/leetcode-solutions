/**
 * https://leetcode.com/problems/add-binary/submissions/
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let carry = 0;
    let result = '';
    const largestStringLength = Math.max(a.length, b.length);
    
    for (let i = largestStringLength - 1; i >= 0; i--) {
        const negativeIndex = i - largestStringLength;
        const sum = (+a.at(negativeIndex) || 0) + (+b.at(negativeIndex)  || 0) + carry;
        
        result = (sum % 2).toString() + result;
        
        carry = 0;
        
        if(sum > 1) {
            carry = 1;
        }   
    }
    return `${carry || ''}${result}`
};