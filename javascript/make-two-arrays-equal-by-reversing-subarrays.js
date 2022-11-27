/**
 * https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/submissions/
 * time complexity
 * space complexity O(1)
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
 var canBeEqual = function(target, arr) {
    return  arr.sort().toString() === target.sort().toString()
};