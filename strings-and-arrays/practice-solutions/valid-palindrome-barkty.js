/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    const res = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    for (let i = 0; i < res.length; i++) {
        if (res.charAt(i) !== res.charAt(res.length - 1 - i)) {
            console.log(false)
            return false
        }
    }
    console.log(true)
    return true
};

isPalindrome("A man, a plan, a canal: Panama")
isPalindrome('race a car')
isPalindrome(' ')