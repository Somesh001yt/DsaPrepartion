class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(val) {
        if (!this.head) {
            this.head = new ListNode(val);
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = new ListNode(val);
        }
    }

    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.val);
            current = current.next;
        }
    }
}

function mergeTwoLists(list1, list2) {
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}

// Example usage:
let list1 = new LinkedList();
list1.addNode(1);
list1.addNode(3);
list1.addNode(5);

let list2 = new LinkedList();
list2.addNode(2);
list2.addNode(4);
list2.addNode(6);

let mergedList = new LinkedList();
mergedList.head = mergeTwoLists(list1.head, list2.head);
mergedList.printList(); // Output: 1 2 3 4 5 6
