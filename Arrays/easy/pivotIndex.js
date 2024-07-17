function pivotIndex(nums) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0); // Step 1: Calculate total sum
   

    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) { // Step 2: Iterate through the array
        console.log(totalSum - leftSum - nums[i] , 'left' , leftSum)
       
        if (leftSum === totalSum - leftSum - nums[i]) { // Step 3: Check left sum equals right sum
           // leftSum === totalSum - leftSum - nums[i]  with this we are checking 
           // total sum is here 28 so we start with first index 28 - 1 left 27 
           // next 27 - 7  = 20  and then -3 = 17  and -6  left 11   so now left ===   totalSum - leftSum - nums[i]
            return i; // Step 4: Return pivot index
        }
        leftSum += nums[i]; // Step 2: Increment left sum    add left sum by 1 in first step
        // add 7 to left = 8   add three here = 11
    }

    return -1; // Step 5: If no pivot index found, return -1
}

// Example usage:
const nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums)); // Output: 3
