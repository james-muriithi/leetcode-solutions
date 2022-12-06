/**
 * https://leetcode.com/problems/sort-array-by-parity/submissions/
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    nums.sort((_, b) => b % 2 == 0 ? 1 : -1 )
    return nums
};