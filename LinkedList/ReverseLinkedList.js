class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const reverseLinkedList = (head) => {
  let cur = head;
  let prev = null;
  let next;

  while (cur !== null) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(reverseLinkedList(head));
