// Q Check if Array Is Sorted and Rotated
// Input: nums = [3,4,5,1,2]
// Output: true
// Explanation: [1,2,3,4,5] is the original sorted array.
// You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].

var check = function (nums) {
  let occurance = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      occurance++;
    }
  }
  nums[nums.length - 1] > nums[0] && occurance++;
  return occurance < 2 ? true : false;
};
