//  Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// step 1 


function permuteUnique(nums) {
    const result = [];

    // dfs recursive helper function
    const dfs = (i, nums) => {
        // base case
        if (i === nums.length) {
            result.push(nums.slice()); // Push a copy of nums to the result
            return;
        }
        let hash = {}

        for (let j = i; j < nums.length; j++) {
            // Swap elements
            if (hash[nums[j]]) continue

            hash[nums[j]] = true;
            [nums[i], nums[j]] = [nums[j], nums[i]];

            dfs(i + 1, nums); // Recur with the updated array

            // Revert the swap to maintain original array state
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    };

    dfs(0, nums);
    return result;
}

// Example usage:
const nums = [1, 1, 2];
console.log(permuteUnique(nums));
