function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }


function levelOrder(root){

    if(!root){
        return []
    }


    let result = []
    let queue = [root]

    while(queue.length > 0){
      const levelValue = []
      const size = queue.length

      for(let i =0;i < size; i++){
        const node  = queue.shift()
        levelValue.push(node)

        if(node.left){
            queue.push(node.left)
        }

        if(node.right){
            queue.push(node.right)
        }
      }
      levelValue.reverse()
      console.log(levelValue)
      result.push(levelValue);
      
    }
    return result
}   


const result = levelOrder([3,9,20,null,null,15,7])

console.log(levelOrder([3,9,20,null,null,15,7]))  