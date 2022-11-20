/**
 * https://leetcode.com/problems/move-zeroes/submissions/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    const zeros = []
    for(let i = 0; i < nums.length;){
        if(nums[i] == 0){
            zeros.push(0)
            nums.splice(i, 1)
            continue;
        }
        i++
    }
    nums.push(...zeros)
};