/**
 * https://leetcode.com/problems/single-number-ii/submissions/
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    // time complexity O(n^2)
    // space complexity O(n)
    // return Array.from(new Set(nums)).filter((num) => nums.indexOf(num) === nums.lastIndexOf(num)).join('')
    
    
    // time complexity O(n)
    // space complexity O(n)
    const numsCount = {}
    for (let i = 0; i < nums.length; i++) {
        numsCount[nums[i]] = numsCount[nums[i]] ? numsCount[nums[i]] + 1 : 1
        if (numsCount[nums[i]] === 3) {
            delete numsCount[nums[i]]
        }
    }
    return Object.keys(numsCount)
};