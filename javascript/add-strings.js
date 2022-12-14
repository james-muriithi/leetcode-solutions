/**
 * https://leetcode.com/problems/add-strings
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    num1 = num1.split('')
    num2 = num2.split('')
    let remainder = 0;
    const largestNumber = num1.length >= num2.length ? num1 : num2;
    const smallestNumber = num2.length <= num1.length ? num2 : num1;

    const result = [];

    for(let i = 1; i <= largestNumber.length; i++) {
        const sum = +largestNumber.at(-i) + (+smallestNumber.at(-i) || 0) + remainder;
        remainder = 0;
        if(sum > 9) {
            remainder = 1;
        }
        result.unshift(sum % 10)
    }
    if(remainder) result.unshift(remainder)

    return result.join('')
}