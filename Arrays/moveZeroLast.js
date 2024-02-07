function moveZeroToLast (nums)  {
   let j =0;
   for(let i=0; i< nums.length; i++){
    if(nums[i] === 0){
        j++
    }else{
        [nums[i-j], nums[i]] = [nums[i] , nums[i-j]]
    }
   }
   return nums
}


console.log(moveZeroToLast([0,1,0,3,12]))