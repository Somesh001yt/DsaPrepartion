function firstMissingPositive (nums) {
  for(let i=0; i<nums.length; i++){
    while(nums[i] >0 && nums[i] !== nums.length && nums[nums[i]-1] !== nums[i]){
      let temp = nums[nums[i]-1]
      nums[nums[i]-1] = nums[i]
      nums[i] = temp
    }
  }

  for(let i of nums){
    if(nums[i] !== i+1){
      return i +1
    }
  }
  return nums.length + 1

  }

 // Example usage:
 const nums = [3, 4, -1, 1];
 const result = firstMissingPositive(nums);
 console.log(result); // Output: 2
  