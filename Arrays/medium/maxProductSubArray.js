function maxProductSubarray(nums) {
    let prevMax = nums[0]; // Initialize prevMax with the first element
    let prevMin = nums[0]; // Initialize prevMin with the first element
    let result = nums[0]; // Initialize result with the first element
    for (let i = 1; i < nums.length; i++) {
        // Calculate the current maximum value considering three cases:
        // 1. Current number times previous maximum
        // 2. Current number by itself
        // 3. Current number times previous minimum (negative * negative = positive)
        let curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
        
        // Calculate the current minimum value considering three cases:
        // 1. Current number times previous minimum
        // 2. Current number by itself
        // 3. Current number times previous maximum (negative * positive = negative)
        let curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

        // Update prevMax and prevMin for the next iteration
        prevMax = curMax;
        prevMin = curMin;

        // Update result if necessary
        result = Math.max(curMax, result);
    }
    return result;
}


    console.log(maxProductSubarray([2,3,-2,4])); // Output: 6
    console.log(maxProductSubarray([-2,0,-1])); // Output: 0