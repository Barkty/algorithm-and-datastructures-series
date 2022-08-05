/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
    // Convert word to an array
    const arr = s.split('')
    //Commence the two-pointer approach: front & back
    let left = 0, right = arr.length
    // Declare the array of vowels
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
    
    while(left < right) {
        if (vowels.indexOf(arr[left]) === -1) {
          left++;
          continue;
        }
        if (vowels.indexOf(arr[right]) === -1) {
          right--;
          continue;
        }
        
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
    console.log(arr.join(''))
    return arr.join("")
};

reverseVowels('Leetcode')