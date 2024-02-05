var maxArea = function(height) {
    let maxWater = 0;
 let left = 0;
 let right = height.length - 1;

 while (left < right) {
   const h = Math.min(height[left], height[right]);
   const w = right - left;

   maxWater = Math.max(maxWater, h * w);

   if (height[left] < height[right]) {
     left++;
   } else {
     right--;
   }
 }

 return maxWater;
};


const heightArray = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const result = maxArea(heightArray);
console.log(result)
