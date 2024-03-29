// function rotatedArray(nums , k){
//     let size = nums.length;

//     if(size > k){
//         k = k % size
//         console.log(k)
//     }

//     const rotated = nums.splice(size - k , size)
//     console.log(rotated)
//     nums.unshift(...rotated)
//     return nums
// }

function rotatedArray(nums, k) {
    const size = nums.length;

    if (size > 0) {
        k = k % size;

        // Reverse the entire array
        reverseArray(nums, 0, size - 1);

        // Reverse the first k elements
        reverseArray(nums, 0, k - 1);

        // Reverse the remaining elements
        reverseArray(nums, k, size - 1);
    }

    return nums;
}



function reverseArray(arr, start, end) {
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}





console.log(rotatedArray([3,4,5,6,8], 3))