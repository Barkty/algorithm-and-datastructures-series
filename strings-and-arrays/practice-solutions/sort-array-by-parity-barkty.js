/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    
    let result = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            result.unshift(nums[i])
        } else {
            result.push(nums[i])
        }
        
        if(result.length === nums.length) {
            let hash = {}
            if(!hash.hasOwnProperty(result)) {
                hash[result] = result
            } else {
                // break;
                console.log(hash)
                return hash;
            }
        }
    }
    
    sortArrayByParity(result)
    
};

sortArrayByParity([3,1,2,4])