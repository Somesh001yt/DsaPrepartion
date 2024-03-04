function mergeTwoSortedArray  (nums1, m , nums2, n) {

    let i=m-1;
    let j=n-1;
    let temp=nums1.length-1; 
     while(j>=0){
        if(i>=0 && nums1[i]>nums2[j]){
            nums1[temp]=nums1[i];
            temp--; 
            i--;
         }else{
            nums1[temp] = nums2[j];
            temp--; 
            j--; 
        }     
    }
    return nums1
 }


 console.log(mergeTwoSortedArray([1,2,3,0,0,0], 3, [2,5,6], 3))


