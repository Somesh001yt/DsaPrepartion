const subsetsDup = (nums) => {
    const result = []
    const temp = []

    // recursive function

    const dfs = (nums , i) => {
        // base case

        if(i === nums.length){
            return result.push([...temp])
        }

        
        // exclude

        dfs(nums ,  i+1)

        //include

        temp.push(nums[i])
        dfs(nums , i+1)
        temp.pop()
    }
   dfs(nums, 0)
   const hash = {}
   for(let el of result){
    if(hash[el]) continue;
    hash[el] = el
   }

    return Object.values(hash) 
}

console.log(subsetsDup([1,2,2]))