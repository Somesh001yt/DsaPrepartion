function lenOfLongSubArr(arr, k) {
  // Initialize pointers and variables
  let preSum = new Map();
  let sum = 0;
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    //If the sum is equal to k, update maxLength
    if (sum === k) {
      maxLength = Math.max(maxLength, i + 1);
    }

    let rem = sum - k;

    // Check if the remainder has been seen before
    if (preSum.has(rem)) {
      let length = i - preSum.get(rem);
      maxLength = Math.max(maxLength, length);
    }

    // Store the sum if it has not been seen before
    if (!preSum.has(sum)) {
      preSum.set(sum, i);
    }
  }

  return maxLength;
}

console.log(lenOfLongSubArr([10, 5, 2, 7, 1, 9], 15));
console.log(lenOfLongSubArr([-1, 2, 3], 6));
-1, 2, 3;
