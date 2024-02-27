// function moveZeroToLast (nums)  {
//    let j =0;
//    for(let i=0; i< nums.length; i++){
//     if(nums[i] === 0){
//         j++
//     }else{
//         [[i-j], [i]] = [[i] , [i-j]]
//     }
//    }
//    return nums
// }


function moveZeroToLast(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Swap nums[i] and nums[j]
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++;
        }
    }
    return nums;
  }

console.log(moveZeroToLast([0,1,0,3,12]))