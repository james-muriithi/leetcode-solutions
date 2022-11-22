/**
 * https://leetcode.com/problems/word-pattern/submissions/
 * time complexity O(n)
 * space complexity O(1)
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    if(pattern.length !== s.split(' ').length) return false
    const patternObject = {}
    const sObject = {}
    for(let i = 0; i < pattern.length; i++) {
        patternObject[pattern[i]] += `${i}`
        sObject[s.split(' ')[i]] += `${i}`
        if (sObject[s.split(' ')[i]] !== patternObject[pattern[i]]) return false
    }
    return true
};