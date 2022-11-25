/**
 * time complexity O(n)
 * space complexity O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    nums.forEach((num, index) => {
        if(index > 0) {
            nums.splice(index, 1, num + nums[index-1])
        }
    })
    return nums
};