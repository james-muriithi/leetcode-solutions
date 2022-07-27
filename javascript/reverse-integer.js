/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    const hasNegative = x < 0;
    let reverseX = 0;
    x = Math.abs(x)
    while(x) {
        reverseX = (reverseX * 10) + (x % 10)
        x = Math.floor(x/10)
    }
    return reverseX > 0x7FFFFFFF ? 0 : hasNegative ? -reverseX : reverseX;
};

/**
 * https://leetcode.com/problems/reverse-integer
 * Runtime: 79 ms, faster than 88.83% of JavaScript online submissions for Reverse Integer.
 * Memory Usage: 43.4 MB, less than 90.48% of JavaScript online submissions for Reverse Integer.
 */