// Given an Integer array nums , find the subarray with the largest sum,
// and return its sum.

// Input [-2,1,-3,4,-1,2,1,-5,4]   ------->>>>>  output:6, [4,-1,2,1]


// function maxSubArray (nums){
//     let maxSum = 0;
//     let startIdx = 0
//     let endIdx =0

//     for(let i=0; i<nums.length; i++){
//         let currentSum = 0

//         for(let j=i; j<nums.length; j++){
//             currentSum += nums[j]

//             if(currentSum > maxSum){
//                 maxSum = currentSum
//                 startIdx = i
//                 endIdx = j
//             }
//         }
//     }
//     return {
//         sum : maxSum,
//         vals : nums.slice(startIdx , endIdx + 1)
//     }
// }


// Time Complexity : O(n*2)
// Space Complexity : O(1)


function maxSubArray (nums){
    let sum =0;
    let max = nums[0]

    for(let i =0; i<nums.length; i++){
        sum += nums[i]

        if(sum > max){
            max = sum
        }

        if(sum <0){
            sum =0
        }
    }
    return max
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))