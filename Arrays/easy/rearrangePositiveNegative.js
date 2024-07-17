// Brute Force

// var rearrangeArray = function(nums) {
//     let positive = []
//     let negative = []

//     for(let i =0; i<nums.length; i++){
//       if(nums[i]> 0){
//           positive.push(nums[i])
//       }else{
//           negative.push(nums[i])
//       }
//     }

//     for(let i=0; i<nums.length/2; i++){
//      nums[i * 2] = positive[i]
//      nums[i * 2 + 1] = negative[i]
//     }
//     return nums
//   }

// Optimal Solution

// Define a function to rearrange an array of integers by sign.
function RearrangebySign(A) {
  let n = A.length;

  // Define an array for storing the answer separately.
  let ans = new Array(n).fill(0);

  // Positive elements start from 0 and negative from 1.
  let posIndex = 0,
    negIndex = 1;
  for (let i = 0; i < n; i++) {
    // Fill negative elements in odd indices and increment by 2.
    if (A[i] < 0) {
      ans[negIndex] = A[i];
      negIndex += 2;
    }

    // Fill positive elements in even indices and increment by 2.
    else {
      ans[posIndex] = A[i];
      posIndex += 2;
    }
  }

  return ans;
}

console.log(RearrangebySign([3, 1, -2, -5, 2, -4]));
