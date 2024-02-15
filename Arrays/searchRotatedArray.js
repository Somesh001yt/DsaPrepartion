// const searchRotateArray = (nums, target) => {
//     for(let i =0; i<nums.length -1; i++){
//         if(nums[i] === target){
//             return i
//         }
//     }
//     return -1;
// }


function searchRotateArray(arr, target) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === target) {
        return mid; // Element found, return its index
      }
  
      // Check if the left half is sorted
      if (arr[start] <= arr[mid]) {
        // Check if the target is in the left half
        if (arr[start] <= target && target < arr[mid]) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      } else {
        // Right half is sorted
  
        // Check if the target is in the right half
        if (arr[mid] < target && target <= arr[end]) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    }
  
    return -1; // Element not found
  }
  

    const rotatedArray = [4, 5, 6, 7, 0, 1, 2];
    const targetElement = 0;
    const result = searchRotateArray(rotatedArray, targetElement);
    console.log(result);