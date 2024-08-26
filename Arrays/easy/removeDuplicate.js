// function removeDuplicate(nums) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] === nums[i + 1]) {
//             // Use splice to remove the duplicate element
//             nums.splice(i + 1, 1);
//             // Decrement i to recheck the current position after removal
//             i--;
//             console.log(nums);
//         }
//     }
//     return nums.length;
// }

// function removeDuplicate(nums) {
//     if(nums.length === 0){
//         return 0
//     }

//     let i =0;
//     for(let j = 1; j<nums.length; j++){
//         if(nums[i] !== nums[j]){
//          i++
//             nums[i] = nums[j]

//         }
//     }
//     return i+ 1
// }

// function removeDuplicate(nums) {
//   let uniqueNums = new Set();

//   for (let i = 0; i < nums.length; i++) {
//     if (uniqueNums.has(nums[i])) {
//       nums.splice(i, 1);
//       i--; // Adjust the index after removing an element
//     } else {
//       uniqueNums.add(nums[i]);
//     }
//   }

//   return nums;
// }

// console.log(removeDuplicate([1, 1, 2, 3, 4, 5, 4, 6]));

function removeDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
        j--; // Adjust the index after removing an element
      }
    }
  }

  return nums;
}

console.log(removeDuplicate([1, 1, 2, 3, 4, 5, 4, 6]));

function removeDuplicate(nums) {
  const uniqueArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (!uniqueArray.includes(nums[i])) {
      uniqueArray.push(nums[i]);
    }
  }

  return uniqueArray;
}

console.log(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
