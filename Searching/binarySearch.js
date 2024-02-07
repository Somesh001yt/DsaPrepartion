/**
 * Perform binary search on a sorted array.
 * @param {number[]} arr - The sorted array to search.
 * @param {number} target - The target value to search for.
 * @return {number} - The index of the target value if found, otherwise -1.
 */
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Target found, return the index.
      } else if (arr[mid] < target) {
        left = mid + 1; // Adjust the search range to the right half.
      } else {
        right = mid - 1; // Adjust the search range to the left half.
      }
    }
  
    return -1; // Target not found.
  }
  
  // Example usage:
  const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const targetValue = 7;
  
  const result = binarySearch(sortedArray, targetValue);
  
  console.log(result)