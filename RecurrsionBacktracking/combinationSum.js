function combinationSum (candidates , target)  {
  let result = []
  let temp = []
 
  candidates.sort((a , b) => a -b)
  

  const dfs = (i , candidates , target ) => {

     // backtracking case
     if(target < 0) return

     // base case
     if(target === 0){
        result.push([...temp])
        return
     }

     // recurssive case

     for(let j =i; j< candidates.length; j++){
        temp.push(candidates[j])
        dfs(j , candidates , target - candidates[j] )
        temp.pop()
     }
  }

  dfs(0 , candidates , target )
  return result

}

console.log(combinationSum([2,3,6,7], 7))