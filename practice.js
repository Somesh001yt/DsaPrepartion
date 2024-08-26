function majorityElement(nums) {
  let count = 0;
  let maj = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      maj = nums[i];
    }

    if (maj === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return maj;
}

// Example usage:
console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
