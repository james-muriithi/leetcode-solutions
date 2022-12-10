/**
 * https://leetcode.com/problems/making-file-names-unique
 * 
 * @param {string[]} names
 * @return {string[]}
 */
 var getFolderNames = function(names) {
    const fileNamesCount = {}
    for(let i = 0; i < names.length;i++) {
        fileNamesCount[names[i]] = (fileNamesCount[names[i]] || 0) + 1;
        if(fileNamesCount[names[i]] > 1) {
            let countFileName = fileNamesCount[names[i]] - 1;
            
            while(fileNamesCount[`${names[i]}(${countFileName})`]) {
                countFileName++
            }
            names[i]= `${names[i]}(${countFileName})`
            fileNamesCount[names[i]] = (fileNamesCount[names[i]] || 0) + 1;
        }
    }
    return names
};