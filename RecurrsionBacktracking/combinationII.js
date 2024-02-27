function combinationSumDuplicate (candidates , target){
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
           if( i !== j && candidates[j] === candidates[j-1]) continue;
          temp.push(candidates[j])
          dfs(j+1 , candidates , target - candidates[j] )
          temp.pop()
       }
    }
  
    dfs(0 , candidates , target )
    return result
   
}


console.log(combinationSumDuplicate([10,1,2,7,6,1,5], 8))   // Output: [[1,1,6],[1,2,5],[1,7],[2,6]]

