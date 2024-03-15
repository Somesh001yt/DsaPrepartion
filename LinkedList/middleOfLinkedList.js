    class ListNode {
        constructor(val, next = null) {
            this.val = val;
            this.next = next;
        }
    }

function middleOfLinkedList(head) {
    let slow = head;
    let fast = head;

    // Move fast pointer two steps ahead and slow pointer one step ahead
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // At this point, slow pointer is at the middle
    return slow;
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(middleOfLinkedList(head)); // Output: ListNode { val: 3, next: ListNode { val: 4, next: ListNode { val: 5, next: null } } }
