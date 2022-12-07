/**
 * https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/description/
 * time complexity O(n)
 * space complexity O(1)
 * 
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
 var busyStudent = function(startTime, endTime, queryTime) {
    let count = 0;
    for(let i = 0; i < endTime.length; i++) {
        if(endTime[i] < queryTime || startTime[i] > queryTime) continue;
        count++
    }
    return count
};