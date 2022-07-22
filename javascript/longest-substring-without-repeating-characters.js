/**
 * @param {string} s
 * @return {number}
 */
 const lengthOfLongestSubstring = (string) => {
    const newSet = new Set();
    let max = i = j = 0;
    while(i < string.length) {
      if(!newSet.has(string[i])) {
          newSet.add(string[i++]);
          max = Math.max(max, newSet.size)
          continue
      } 
        newSet.delete(string[j++]);
    }
    return max;
  };

  /**
   * https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/
   * Runtime: 138 ms, faster than 59.71% of JavaScript online submissions for Longest Substring Without Repeating Characters.
   * Memory Usage: 46.5 MB, less than 79.45% of JavaScript online submissions for Longest Substring Without Repeating Characters.
   */