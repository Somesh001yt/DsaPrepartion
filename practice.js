

function fibRecursion (nums) {
  if(nums <= 1){
    return nums
  }else{
   return   fibRecursion( nums - 1) + fibRecursion(nums - 2)
  }


}

console.log(fibRecursion(15));