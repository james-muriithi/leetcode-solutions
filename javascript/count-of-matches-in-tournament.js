/**
 * https://leetcode.com/problems/count-of-matches-in-tournament/submissions/
 * time complexity O(n)
 * space complexity O(1)
 * 
 * @param {number} n
 * @return {number}
 */
 var numberOfMatches = function(n) {
    let totalMatches = 0;
    while(n > 1) {
        if(n % 2 === 0) {
            totalMatches += n/2
            n /= 2
        } else {
            totalMatches += (n - 1) / 2
            n = (n - 1) / 2 + 1
        }
    }
    return totalMatches
};