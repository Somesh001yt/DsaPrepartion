var intersection = function(nums1, nums2) {
    let inter = []

    for (let i = 0; i < nums1.length; i++) {
        let first = nums1[i];
        for (let j = 0; j < nums2.length; j++) {
            let second = nums2[j];
            if (first === second && !inter.includes(first)) {
                inter.push(first);
                break; // Break the inner loop when a match is found to avoid duplicates
            }
        }
    }

    return inter;
};

// var intersection = function(nums1, nums2) {
//     return nums1.filter(value => nums2.includes(value));
// };




console.log(intersection([3,2,6,22], [5,21,6,2]));  
