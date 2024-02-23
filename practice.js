
function subsets (nums) {
 
  let result = []

  let temp = []

   const dfs = (nums , i) => {
    if(i === nums.length){
      return result.push([...temp])
    }

    temp.push(nums[i])
    dfs(nums , i +1)
    temp.pop()
    dfs(nums , i+1)
   }

   dfs( nums , 0)
   return result
  
}
console.log(subsets([1 , 2,3]));