function insertionSort(arr) {
    const n = arr.length;


    for (let i = 1; i < n; i++) {
        // Select the current element to be inserted
        const currentElement = arr[i];
        let j = i - 1;

        // Move elements greater than currentElement to one position ahead of their current position
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the currentElement at its correct position
        arr[j + 1] = currentElement;
    }

    return arr;
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray);
