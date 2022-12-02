/**
 * https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var countKDifference = function(nums, k) {
    const seen = {}
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(seen[nums[i] - k]) {
            count += seen[nums[i] - k]
        }
        if(seen[nums[i] + k]) {
            count += seen[nums[i]+ k]
        }
        
        seen[nums[i]] = (seen[nums[i]] || 0) + 1
    }
    return count
};