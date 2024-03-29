// function moveNegativeNumbersToStart(arr) {
//     // Filter out negative numbers
//     const negativeNumbers = arr.filter(num => num < 0);
    
//     // Filter out positive numbers
//     const positiveNumbers = arr.filter(num => num >= 0);
  
//     // Concatenate negative and positive numbers
//     const result = negativeNumbers.concat(positiveNumbers);
  
//     return result;
//   }

//   function moveNegativeNumbersToStart(arr) {
//     let negative = []
//     let positive = []

//     for(let i=0; i<arr.length; i++){
//         if(arr[i] < 0){
//             negative.push(arr[i])
//         }else{
//             positive.push(arr[i])
//         }
       
//     }
//     return [...negative , ...positive];

//   }

  // function moveNegativeNumbersToStart(arr) {
  //   let current = 0;

  //   for(let i=0; i<arr.length; i++){
  //       if(arr[i] < 0){
  //          [arr[current] , arr[i]] = [arr[i] , arr[current]]
  //           current++
  //       }
  //   }
  //   return arr
  // }


  function moveNegativeToStart(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            // Swap nums[i] and nums[j]
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++;
        }
    }
    return nums;
  }
  
  
  // Example usage:
  const inputArray = [3, -1, -4, 2, 5, -7, 6, -2];
  const resultArray = moveNegativeToStart(inputArray);
  
  console.log(resultArray);
  