// Subarray Sum Equals K

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

function subarraySum(nums, target) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === target) {
        count++;
      }
    }
  }
  return count;
}

console.log(subarraySum([1, 2, 3], 3));
