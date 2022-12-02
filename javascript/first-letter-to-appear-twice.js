/**
 * https://leetcode.com/problems/first-letter-to-appear-twice/
 * 
 * @param {string} s
 * @return {character}
 */
 var repeatedCharacter = function(s) {
    const seen = {}
    for (let i = 0; i < s.length; i++) {
        seen[s[i]] = (seen[s[i]] || 0) + 1
        if(seen[s[i]] > 1) return s[i]
    }
};