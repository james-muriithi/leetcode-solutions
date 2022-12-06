/**
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/
 * 
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 var nextGreatestLetter = function(letters, target) {
    letters.unshift(target)
    letters.sort();
    const index = letters.lastIndexOf(target)
    return letters[index+1] || letters[0]
};