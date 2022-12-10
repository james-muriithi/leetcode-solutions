/**
 * https://leetcode.com/problems/kth-missing-positive-number
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
 var findKthPositive = function(arr, k) {
    const set = new Set(arr)
    const results = []
    for(let i = 1; i <= arr.length + k;i++){
        if(!set.has(i)) results.push(i)
    }

    return results[k-1]
};