const firstMissingPositive = (nums) => {
    for(let i = 0; i< nums.length; i++){
        while(nums[i] > 0 && nums[i] <= nums.length && nums[nums[i]-1] !== nums[i]){
             nums[[nums[i]-1]] , nums[i]= nums[nums[i]] ,  [nums[nums[i] - 1]]
        }
    }

    for(let i =0; i<nums.length; i++){
        if(nums[i] !== i+1){
            return i +1
        }
    }
    return nums.length + 1
}



// function firstMissingPositive(nums) {
//     const numSet = new Set(nums);

//     // Iterate from 1 onwards to find the first missing positive integer
//     for (let i = 1; i <= nums.length + 1; i++) {
//         if (!numSet.has(i)) {
//             return i;
//         }
//     }
// }


const nums = [3, 4, -1, 1];
const result = firstMissingPositive(nums);
console.log(result); // Output: 2