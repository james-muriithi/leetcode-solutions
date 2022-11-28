/**
 * https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/submissions/
 * 
 * @param {number[]} arr
 * @return {number}
 */
 var findSpecialInteger = function(arr) {
    let results = {};
    for (let i = 0; i < arr.length; i++) {
      results[arr[i]] =  (results[arr[i]] || 0) + 1
    }
    const values = Object.values(results)
    return Object.keys(results)[values.indexOf(Math.max(...values))]
};