/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 *  time complexity O(n)
 *  space complexity O(1)
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    const countNums = {}
    for(let i = 0; i < nums.length;) {
        countNums[nums[i]] = (countNums[nums[i]] || 0) + 1;
        if(countNums[nums[i]] > 2) {
            nums.splice(i, 1)
            continue;
        }
        i++
    }
};