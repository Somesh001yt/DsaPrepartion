// var intersection = function(nums1, nums2) {
//     let inter = []

//     for (let i = 0; i < nums1.length; i++) {
//         let first = nums1[i];
//         for (let j = 0; j < nums2.length; j++) {
//             let second = nums2[j];
//             if (first === second && !inter.includes(first)) {
//                 inter.push(first);
//                 break; 
//             }
//         }
//     }

//     return inter;
// };

// var intersection = function(nums1, nums2) {
//     return nums1.filter(value => nums2.includes(value));
// };


var intersection = function(nums1, nums2) {
    let frequencyMap = {};
    let intersection = [];

    // Populate frequency map for nums1
    for (let num of nums1) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    // Check each element in nums2 if it's in frequency map and not yet added to intersection
    for (let num of nums2) {
        if (frequencyMap[num] > 0) {
            intersection.push(num);
            frequencyMap[num]--;
        }
    }

    return intersection;
};

 
// Big O(n + m).

    console.log(intersection([3,2,6,22], [5,21,6,2]));  
