function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
  


function levelOrder (root) {
    if (!root) {
        return [];
    }

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelValues = [];
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            console.log(node ,'node')
            levelValues.push(node.val);
            console.log(levelValues, 'level')

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        result.push(levelValues);
    }

    return result;

};


const result = levelOrder([3,9,20,null,null,15,7])

console.log(levelOrder([3,9,20,null,null,15,7]))  // Output: [[3],[9,20],[15,7]]