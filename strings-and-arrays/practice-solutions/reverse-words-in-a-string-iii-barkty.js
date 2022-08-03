/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    let res = ''
    let word = ''
    
    // Loop through the sentence
    for (let c of s) {
        // If c is space
        if(c === ' ') {
            // Add the reversed word from the sentence to the others and the space
            res += word + c
            // Clear the word
            word = ''
        } else {
            // If c is not space but a character add it to the current word being reversed
            word = c + word
        }
    }

    // Return the last word concatenated with the result cause there's no space after it
    return res + word
};

reverseWords("Let's take LeetCode contest")