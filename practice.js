function levelOrder (root){
   if(!root){
    return []
   }

   const result = []
   const queue = [root]

   while(queue.length > 0){
    const level = []
    const size = queue.length

    for(let i=0; i<size; i++){
      const node = queue.shift()
      level.push(node.val)

      if(node.left){
        queue.push(node.left)
      }

      if(node.right){
        queue.push(node.right)
      }
    }
    result.push(level)
   }
   return result
}


const result = levelOrder([3,9,20,null,null,15,7])

console.log(levelOrder([3,9,20,null,null,15,7]))  // Output: [[3],[9,20],[15,7]]