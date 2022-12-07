/**
 * https://leetcode.com/problems/rearrange-words-in-a-sentence/description/
 * 
 * @param {string} text
 * @return {string}
 */
 var arrangeWords = function(text) {
    const wordsArr = text.split(' ')
    const letterCountMap = {}
    for(let i = 0; i < wordsArr.length; i++) {
        if(letterCountMap[wordsArr[i].length]) {
            letterCountMap[wordsArr[i].length] = letterCountMap[wordsArr[i].length] + ' ' + wordsArr[i].toLowerCase()
        } else {
            letterCountMap[wordsArr[i].length] = wordsArr[i].toLowerCase()
        }
    }
    const words = Object.values(letterCountMap)
    const firstWord = words[0].charAt(0).toUpperCase() + words[0].slice(1)
    return [firstWord, ...words.slice(1)].join(' ')
};