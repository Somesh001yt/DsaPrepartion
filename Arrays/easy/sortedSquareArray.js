function sortedSquares(nums) {
    let square = []
    for (let i of nums){
  square.push(i * i)
     
    }
  
    return sortedArr(square);
     
  };
  
  
  function sortedArr (arr){
   
    if(arr.length <= 1){
      return arr;
  }
  
  let left = []
  let right = []
  let pivot =arr[0]
  
  for(let i =1; i< arr.length; i++){
      if(arr[i] < pivot){
          left.push(arr[i])
          console.log(left)
      }else {
          right.push(arr[i])
      }
  }
  
  return [...sortedArray(left), pivot , ...sortedArray(right)]
  }
  
  
  console.log(sortedSquares([-4,-1,0,3,10]))