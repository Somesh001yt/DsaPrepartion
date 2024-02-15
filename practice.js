  function makeUniqueArray(nums) {

    nums.sort((a,b)=> a-b)

    let count = 0;
 
    for(let i = 1; i <nums.length;i++){
        if(nums[i]<=nums[i-1]){
            let val = nums[i-1] - nums[i] + 1
            count += val 
            nums[i] = nums[i-1] + 1
        }
    }
    return count
   
    
   }
   
   const result = makeUniqueArray([3,2,1,2,1,7]);  // [3,4,1,2,5,7]
   console.log(result);