function twoSum(nums, target) {
    let  number = {}
   
     for(let i =0; i<nums.length; i++){
       const noToFInd = target - nums[i];
      console.log(noToFInd)
   
       if(noToFInd in number){
         return [number[noToFInd] , i]
       }
   
       number[nums[i]] = i
     }
   
     
     return []; 
   }
   
   console.log(twoSum([3,2,4],
                      6))
   