/**
 * https://leetcode.com/problems/find-the-winner-of-an-array-game/description/
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
 var getWinner = function(arr, k) {
    if(k >= arr.length - 1) return Math.max(...arr)
    const wins = {}

    while(true) {
        const smallerIndex = arr[0] > arr[1] ? 1 : 0
        const largerIndex = arr[0] > arr[1] ? 0 : 1
        
        wins[arr[largerIndex]] = (wins[arr[largerIndex]] || 0) + 1
        if(wins[arr[largerIndex]] == k) return arr[largerIndex]
        arr.push(arr[smallerIndex])
        arr.splice(smallerIndex, 1)
    }
};