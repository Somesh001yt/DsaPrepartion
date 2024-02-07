// bubbleSort

function bubbleSort(arr) {
    for(let i =0; i< arr.length; i++){
        for(let j =0; j< i -1; j++){
        
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }

        }
    }
    return arr
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray);


// The time complexity of Bubble Sort is O(n^2) in the worst and average cases, and O(n) in the best case.
