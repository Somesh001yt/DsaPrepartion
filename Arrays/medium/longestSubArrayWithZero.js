function longestSubArray(arr) {
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      if (sum === 0) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }

  return maxLength;
}

console.log(longestSubArray([15, -2, 2, -8, 1, 7, 10, 23]));
