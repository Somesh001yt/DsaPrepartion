// Quick Sort implementation


function sortedArray(arr) {

    if(arr.length <= 1){
        return arr;
    }

    let left = []
    let right = []
    let pivot =arr[0]

    for(let i =1; i< arr.length; i++){
        
        if(arr[i] < pivot){
            left.push(arr[i])
            console.log(left)
        }else {
            right.push(arr[i])
        }
    }

    return [...sortedArray(left), pivot , ...sortedArray(right)]
}


// console.log(sortedArray([11,3,76,432,65]))

// Time complexity  O(n log(n))

// Worst Case   O(n^2)


