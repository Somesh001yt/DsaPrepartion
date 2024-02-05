function twoSum(nums, target) {
  let number  = {}

  for(let i= 0; i<nums.length; i++){
    let noToFind = target - nums[i];
    
    if(noToFind in number){
      return [number[noToFind] , i]
    }
    number[nums[i]] = i
  }
  

}
   
   console.log(twoSum([3,2,4],
                      6))
   