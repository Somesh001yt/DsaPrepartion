function findSumOfZeros(arr) {
    const result = [];

  
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum === 0) {
            result.push([arr[left], arr[right]]);
            left++;
            right--;
        } else if (sum < 0) {
            left++;
        } else {
            right--;
        }
    }

    return result;
}

// Example usage:
const numbers = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
const pairsWithSumZero = findSumOfZeros(numbers);
console.log(pairsWithSumZero);
