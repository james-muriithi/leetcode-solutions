/**
 * https://leetcode.com/problems/shuffle-string/
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    // const arr = new Array(s.length).fill(' ');
    // indices.forEach((index, i) => {
    //     arr.splice(index, 1, s[i])
    // })
    // return arr.join('')
    const obj = {};
    for(let i = 0; i < s.length; i++) {
        obj[indices[i]] = s[i];
    }
    return Object.values(obj).join('')
};