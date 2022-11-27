/**
 * https://leetcode.com/problems/minimum-moves-to-reach-target-score/
 * time complexity 
 * space complexity O(1)
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
 var minMoves = function(target, maxDoubles) {
    let moves = 0;
    
    while(target > 1 && maxDoubles > 0) {
        if(maxDoubles > 0 && target % 2 == 0) {
            target /= 2;
            moves++;
            maxDoubles --;
            continue;
        }
        target --;
        moves++;
    }
    
    return moves + target -1
};