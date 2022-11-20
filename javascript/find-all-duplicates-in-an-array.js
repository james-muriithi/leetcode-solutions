/**
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    const mySet = new Set ();
    const duplicates = [];
    
    for(let i = 0; i < nums.length; i++) {
        if(mySet.has(nums[i])) {
            duplicates.push(nums[i])
            continue;
        }
        mySet.add(nums[i])
    }
    return duplicates
};