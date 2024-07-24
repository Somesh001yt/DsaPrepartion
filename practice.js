function missingElement(nums) {
  let n = nums.length;

  let numSet = new Set(nums);
  let missing = [];

  for (let i = 1; i < n; i++) {
    if (!numSet.has(i)) {
      missing.push(i);
    }
  }
  return missing;
}

console.log(missingElement([1, 2, 4, 5, 6, 7]));
