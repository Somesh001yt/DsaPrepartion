// Subarray Sum Equals K

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

/////////////////        Brute Force Appraoch    //////////////

//    let count = 0

//     for(let i=0; i<nums.length; i++){
//         for(let j =i; j<nums.length; j++){
//           let sum = 0

//         for (let k = i; k <= j; k++) {
//     sum += nums[k];
// }

//           if(sum === k){
//             count++
//           }
//         }
//     }
//     return count

////////////////      Better Appraoch    //////////////////////////////

//  let count = 0

//     for(let i=0; i<nums.length; i++){
//           let sum = 0
//         for(let j =i; j<nums.length; j++){
//     sum += nums[j];
//      if(sum === k){
//             count++
//           }
//      }

//     }
//     return count

var subarraySum = function (nums, k) {
  let map = new Map();
  let sum = 0;
  let count = 0;
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) count += map.get(sum - k);
    if (map.has(sum)) map.set(sum, map.get(sum) + 1);
    else map.set(sum, 1);
  }
  return count;
};
