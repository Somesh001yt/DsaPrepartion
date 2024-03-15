class Node {
    constructor (val){
        this.val = val
        this.next = null
    }
}


// 4 5 1  9
 
// we have to delete 5 from linked list

// so we define next node.next.next

// 5 to 9

// 1 replace the 5

function deleteNode (node) {
    let next = node.next.next
    node.val = node.next.val
    node.next = next
}

let node1 = new Node(4);
let node2 = new Node(5);
let node3 = new Node(1);
let node4 = new Node(9);

// Connect nodes to form a linked list: 4 -> 5 -> 1 -> 9
node1.next = node2;
node2.next = node3;
node3.next = node4;

// Call deleteNode to delete node with value 5
deleteNode(node2);

// Print the linked list to verify deletion
let current = node1;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}