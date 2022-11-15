/**
 * https://leetcode.com/problems/add-to-array-form-of-integer/
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
 var addToArrayForm = function(num, k) {
    let carry = 0;
    let result = num.length > k.toString().length ? num : k.toString().split('');
    const largestLength = Math.max(num.length, k.toString().length);
    
    for(let i = largestLength - 1; i >= 0; i--) {
        const negativeIndex = i - largestLength
        
        const num1 = k.toString().at(negativeIndex)
        const num2 = num.at(negativeIndex)
        
        if((num1 === undefined || num2 === undefined)  && !carry) {
            break;
        }
        
        const sum = (+num1 || 0) + (num2  || 0) + carry;
        
        carry = 0;
        
        result.splice(negativeIndex, 1,sum%10)
        
        if(sum > 9) {
            carry = 1
        }
    }
    
    if(carry) result.unshift(carry)
    return result
};