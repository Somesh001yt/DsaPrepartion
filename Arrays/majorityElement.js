function majorityElement(nums) {
  let count = 0,
    maj = 0;
  for (let n of nums) {
    if (count === 0) {
      maj = n;
    }
    if (maj === n) {
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
