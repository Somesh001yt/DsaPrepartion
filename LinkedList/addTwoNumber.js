var addTwoNumbers = function (l1, l2) {
  let dummyNode = new ListNode(-1);
  let curr = dummyNode;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let sum = carry;
    if (l1) sum += l1.val;
    if (l2) sum += l2.val;

    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry) {
    curr.next = new ListNode(carry);
  }

  return dummyNode.next;
};
