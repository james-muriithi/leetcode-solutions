/**
 * https://leetcode.com/problems/missing-number
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    // const set = new Set(nums)
    // for(let i = 0; i  <= nums.length; i++) {
    //     if(!set.has(i)) return i
    // }
    const sumUpToN = (nums.length * (nums.length + 1)) / 2
    const arrSum = nums.reduce((acc, cV) => acc+cV, 0)
    return sumUpToN - arrSum 
};