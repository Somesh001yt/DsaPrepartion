var singleNonDuplicate = function (arr) {
  let n = arr.length;

  if (arr[0] !== arr[1]) return arr[0];
  if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];
  if (n === 1) return arr[0];

  let left = 1;
  let right = n - 2;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1]) return arr[mid];

    if (
      (mid % 2 === 1 && arr[mid] === arr[mid - 1]) ||
      (mid % 2 === 0 && arr[mid] === arr[mid + 1])
    ) {
      // Eliminate the left half:
      left = mid + 1;
    }
    // We are in the right:
    else {
      // Eliminate the right half:
      right = mid - 1;
    }
  }
  return -1;
};

console.log(singleNonDuplicate([1, 1, 2, 2, 3, 3, 4, 5, 5, 6]));
