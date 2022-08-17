/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    
    let result = []
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] % 2 === 0) {
            result.unshift(nums[i])
        } else {
            result.push(nums[i])
        }
    }
    return result;
    
};

sortArrayByParity([3,1,2,4])