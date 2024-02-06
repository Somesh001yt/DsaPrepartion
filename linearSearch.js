function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1; 
}

// Example usage
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const targetValue = 5;
const result = linearSearch(array, targetValue);

if (result !== -1) {
    console.log(`${targetValue} found at index ${result}.`);
} else {
    console.log(`${targetValue} xvdnot in array.`);
}
