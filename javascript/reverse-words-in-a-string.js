/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    return s.split(' ').reverse().filter(s => !!s.trim()).join(' ')
};