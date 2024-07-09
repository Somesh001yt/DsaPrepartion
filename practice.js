function removeElement(nums, k) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === k) {
      nums[left] = nums[right];
      console.log(right);
      right--;
    } else {
      left++;
    }
  }
  return left;
}

console.log(removeElement([3, 2, 2, 3], 3));
