/**
 * https://leetcode.com/problems/shuffle-the-array/description/
 * 
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    const result = [];
    const x = nums.slice(0, n)
    const y = nums.slice(n);
    for(let i = 0; i < n; i++) {
        result.push(x[i], y[i])
    }

    return result
};