/**
 * https://leetcode.com/problems/palindrome-number/submissions/
 * 
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    // return x.toString().split('').reverse().join('') == x
    x = x.toString()
    let center = Math.floor(x.length / 2)
    return x.slice(0 , center) 
        === x.substr(x.length - center).split('').reverse().join('')
};