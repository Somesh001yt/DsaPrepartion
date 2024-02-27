function combinationSumIII (k , n)  {
    let result = []
    let nums = []

    for (let i = 1; i <= 9; i++) nums.push(i);

        const dfs = (i , nums, k , n , slate) => {

            // backtracking case
             if(n < 0){
                return
             }

            // base case
             if(slate.length === k) {
                if(n === 0){
                    result.push(slate.slice())
                }
                return
             }

            // recusive case

            for(let j =i; j< nums.length; j++){
                slate.push(nums[j])
                dfs(j +1 , nums , k , n - nums[j] ,slate)
                slate.pop()
            }
        }

        dfs(0 , nums,k, n ,[] )
        return result

  }
  
  console.log(combinationSumIII(3, 7))