function secondLargestNumber (arr){
    
    let largest = 0;
    let second = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
                        second = largest
            largest = arr[i];

            console.log(second)
        }else if (arr[i] !== largest && arr[i] > second){
            second = arr[i]
            console.log(second)
        }

    }
return second    

    
}

console.log(secondLargestNumber([1,23,54,65,34,5]))