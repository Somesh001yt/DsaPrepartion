
function makeUniqueArray(nums) {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);

    // Initialize a variable to keep track of the number of changes needed
    let count = 0;

    // Iterate through the sorted array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // If the current number is less than or equal to the previous number
        if (nums[i] <= nums[i - 1]) {
            // Calculate the difference between the current and previous numbers, add 1 to it
            let val = nums[i - 1] - nums[i] + 1;
            // Increment the count by the calculated value
            count += val;
            // Update the current number to be one greater than the previous number
            nums[i] = nums[i - 1] + 1;
        }
    }

    // Return the total count of changes needed to make the array unique
    return count;
}




const result = makeUniqueArray([3,2,1,2,1,7]);  // [3,4,1,2,5,7]
console.log(result);