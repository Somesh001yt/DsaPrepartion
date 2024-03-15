class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if (!root) return 0;

    let sum = 0;

    // Recursive function to traverse the tree
    const traverse = (node, isLeft) => {
        if (!node.left && !node.right && isLeft) {
            // If it's a left leaf, add its value to the sum
            sum += node.val;
            return;
        }

        // Traverse left and right subtrees
        if (node.left) traverse(node.left, true);
        if (node.right) traverse(node.right, false);
    };

    traverse(root, false); // Start traversal from the root

    return sum;
};

// Example usage:
// Constructing a binary tree
const tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

console.log(sumOfLeftLeaves(tree)); // Output should be 24
