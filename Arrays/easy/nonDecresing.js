function checkPossi1bility(nums) {
  let modifyCount = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      modifyCount++;

      if (modifyCount > 1) {
        return false;
      }

      if (i > 0 && nums[i - 1] > nums[i + 1]) {
        nums[i + 1] = nums[i];
      } else {
        nums[i] = nums[i + 1];
      }
    }
  }
  return true;
}

console.log(checkPossibility([4, 2, 3])); // Output: true
console.log(checkPossi32bility([4, 2, 1]));
