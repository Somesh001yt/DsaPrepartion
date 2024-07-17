// function majorityElement(nums) {
//     const result = [];
//     const countMap = new Map();

//     // Step 1: Count occurrences of each number
//     for (let num of nums) {
//         countMap.set(num, (countMap.get(num) || 0) + 1);
//     }

//     // Step 2: Check if counts exceed n/3
//     const n = nums.length;
//     for (let [num, count] of countMap.entries()) {
//         if (count > Math.floor(n / 3)) {
//             result.push(num);
//         }
//     }

//     return result;
// }

// // Example usage:
// const nums = [3, 2, 3];
// console.log(majorityElement(nums)); // Output: [3]

// const nums2 = [1, 1, 1, 3, 3, 2, 2, 2];
// console.log(majorityElement(nums2)); // Output: [1, 2]



function majorityElement(nums) {
    let count1 = 0, count2 = 0;
    let candidate1 = null, candidate2 = null;

    // Step 1: Find potential candidates
    for (let num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    // Step 2: Verify candidates
    count1 = 0;
    count2 = 0;
    for (let num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        }
    }

    const result = [];
    const n = nums.length;
    if (count1 > Math.floor(n / 3)) {
        result.push(candidate1);
    }
    if (count2 > Math.floor(n / 3)) {
        result.push(candidate2);
    }

    return result;
}

// Example usage:
const nums = [3, 2, 3];
console.log(majorityElement(nums)); // Output: [3]

const nums2 = [1, 1, 1, 3, 3, 2, 2, 2];
console.log(majorityElement(nums2)); // Output: [1, 2]

