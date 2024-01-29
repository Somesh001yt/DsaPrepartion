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

function removeDuplicate(nums) {
    if(nums.length === 0){
        return 0
    }

    let i =0;
    for(let j = 1; j<nums.length; j++){
        if(nums[i] !== nums[j]){
         i++
            nums[i] = nums[j]
         
           
        }
    }
    return i+ 1
}

console.log(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
