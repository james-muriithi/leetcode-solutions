/**
 * https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/submissions/
 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) {
    // return (salary
    //         .map((s) => s/1000)
    //         .sort((a, b) => b - a)
    //         .slice(1, -1)
    //         .reduce((acc, b) => acc + b, 0) / (salary.length -2)) * 1000
    const min = Math.min(...salary)
    const max = Math.max(...salary)
    return (salary.reduce((acc, b) => acc + +b, 0) - (min + max)) / (salary.length -2)
};