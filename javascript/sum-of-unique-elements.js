/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    const uniques = new Set();
    const duplicates = new Set();

    for (let index = 0; index < nums.length; index++) {
        if (!duplicates.has(nums[index])) {
            uniques.add(nums[index])
            duplicates.add(nums[index])
            continue
        }
        uniques.delete(nums[index])
    }

    return Array.from(uniques).reduce((acc, currentValue) => acc + currentValue, 0)
};


// var sumOfUnique = nums => (nums
//     .filter(num => nums.indexOf(num) === nums.lastIndexOf(num))
//     .reduce((acc, curr) => acc + curr, 0))