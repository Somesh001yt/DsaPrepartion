// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

////////////////   Better Approach     //////////////////////

// function longestConsequtive (nums){

//    if(nums.length === 0) return 0

//    nums.sort((a ,b)=> a-b)

//    let longest =1
//    let count = 0
//    let lastSmaller  = Number.MIN_VALUE

//    for(let i = 0; i<nums.length; i++){
//     if(nums[i] -1 == lastSmaller){
//         count++
//         lastSmaller = nums[i]
//     }else if (nums[i] != lastSmaller){
//         count = 1
//         lastSmaller = nums[i]
//     }

//     longest = Math.max(longest , count)
//    }
//    return longest
// }

//////////////////    Optimal Approach     //////////////////////////

var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  nums.sort((a, b) => a - b);

  let longest = 1;
  let count = 0;
  let lastSmaller = Number.MIN_VALUE;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - 1 == lastSmaller) {
      count++;
      lastSmaller = nums[i];
    } else if (nums[i] != lastSmaller) {
      count = 1;
      lastSmaller = nums[i];
    }

    longest = Math.max(longest, count);
  }
  return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
