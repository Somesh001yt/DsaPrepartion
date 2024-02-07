function selectionSort (arr){
    for(let i =0; i< arr.length; i++){
        let min = i;

        for(let j = i+1; j<arr.length; j++){
            if(arr[j] < arr[min]){
                min =j;
            }
        }

        if(i!== min){
            temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}


// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray);