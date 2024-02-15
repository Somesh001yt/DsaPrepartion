  function rotatedArray(nums , k) {
 let size = nums.length -1
  if(size > k){
    k = k% size

    rotated(nums , 0 , size - 1)

    rotated(nums , 0 , k - 1)

    rotated(nums , k , size - 1)
  }
  return nums
   
   }


   function rotated (arr , start , end){
    while(start <= end){
      let temp = arr[start]
      arr[start] = arr[end]
      arr[end] = temp
      start++
      end--
    }
   }
   
   console.log(rotatedArray([3,4,5,6,8], 3))