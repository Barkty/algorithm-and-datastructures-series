/**
 * @param {string[]} strs
 * @return {string}
 */

//Brute force

const longestCommonPrefix = function(strs) {
    let res = ''
    let arr2d = []
    for (const element of strs) {
        arr2d.push(element.split(''))
    }
    for (let i = 0, j = 1; i < arr2d.length && j < arr2d.length; i++, j++) {
        let x = 0, y = 0;
        while (x < 4 && y < 4) {
            if (arr2d[i][x] === arr2d[j][y]) {
                if (!res.includes(arr2d[i][x])) {
                    res += arr2d[i][x]
                }
            }
            x++
            y++
        }
    }
    
    console.log(res)
    return res
};

longestCommonPrefix(["flower","flow","flight"])
longestCommonPrefix(["dog","racecar","car"])