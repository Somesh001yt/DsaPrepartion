function secondLargestNumber (arr){
    
 let largest = 0;
 let secondLargest = 0;

 for(let i=0; i< arr.length; i++){
  if(arr[i] > largest){
    secondLargest = largest
    largest = arr[i]
  }else if (arr[i] !== largest && arr[i] > secondLargest){
    secondLargest = arr[i]
  }
 }
 return secondLargest

    
}

console.log(secondLargestNumber([1,23,54,65,34,5]))