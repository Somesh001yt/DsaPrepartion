var findPeakElement = function (nums) {
  if (nums.length === 1) return 0;

  for (let i = 0; i < nums.length; i++) {
    if (
      (i === 0 || nums[i - 1] < nums[i]) &&
      (i === nums.length - 1 || nums[i] > nums[i + 1])
    ) {
      return i;
    }
  }
};

function findPeakElement(arr) {
  let n = arr.length; // Size of the array

  // Edge cases:
  if (n === 1) return 0;
  if (arr[0] > arr[1]) return 0;
  if (arr[n - 1] > arr[n - 2]) return n - 1;

  let low = 1,
    high = n - 2;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // If arr[mid] is the peak:
    if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) return mid;

    // If we are in the left:
    if (arr[mid] > arr[mid - 1]) low = mid + 1;
    // If we are in the right:
    // Or, arr[mid] is a common point:
    else high = mid - 1;
  }
  // Dummy return statement
  return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1];
let ans = findPeakElement(arr);
console.log("The peak is at index:", ans);
