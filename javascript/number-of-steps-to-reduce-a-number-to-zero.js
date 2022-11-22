/**
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/submissions/
 * time complexity O(n)
 * space complexity O(1)
 * 
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
    let count = 0;
    for (let i = num; i > 0; ) {
        count += 1
        if(i % 2 === 0){ 
            i /= 2
            continue;
        }
        i--
    }
    return count
};