//  Q  Majority Element II

// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]

var majorityElement = function (nums) {
  let hashMap = new Map();
  let result = [];

  for (let num of nums) {
    hashMap.set(num, (hashMap.get(num) || 0) + 1);
  }

  for (let [key, value] of hashMap.entries()) {
    if (value > nums.length / 3) {
      result.push(key);
    }
  }
  return result;
};
