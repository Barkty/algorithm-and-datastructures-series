/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    //Brute force: Time Complexity o(2n)
    
    for (let i = 0; i < nums.length; i++) {
    
        for (let j = 1; j < nums.length; j++) {
            if (nums[j] + nums[i] === target) {
                // console.log([nums.indexOf(nums[i]), nums.indexOf(nums[j])])
                return [nums.indexOf(nums[j]), nums.indexOf(nums[i])]
            }
        }
    }

    //Time Complexity 0(n)
    //Space Complexity 0(n)


    // Create an empty array to store the result
    let result = []

    // Create an object to store the difference and its index
    let hash = {}

    for (let i = 0; i < nums.length; i++) {
        // Get the difference and check if it exists in the object
        let difference = target - nums[i];
        if (difference in hash) {
            //Store the indexes in the array
            result[0] = i
            result[1] = hash[difference]
            break;
        } else {
            //Store the new difference
            hash[nums[i]] = i
        }
        
    }
    console.log(result)
    return result;
};

twoSum([7,11,15,2], 9)
twoSum([3,2,4], 6)
twoSum([3,3], 6)