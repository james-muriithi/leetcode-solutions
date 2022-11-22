/**
 * https://leetcode.com/problems/isomorphic-strings
 *  time complexity O(n)
 *  space complexity O(1)
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    const sObject = {}
    const tObject = {}
    for(let i = 0; i < s.length; i++) {
        sObject[s[i]] = `${sObject[s[i]] || ''}${i}`
        tObject[t[i]] = `${tObject[t[i]] || ''}${i}`
        if(sObject[s[i]] !== tObject[t[i]]) return false
    }
    return true
};