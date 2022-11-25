/**
 * https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/submissions/
 * 
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    const product = n.toString().split('').reduce((acc, b) => acc * b, 1)
    const sum = n.toString().split('').reduce((acc, b) => acc + +b, 0)
    return product - sum
};