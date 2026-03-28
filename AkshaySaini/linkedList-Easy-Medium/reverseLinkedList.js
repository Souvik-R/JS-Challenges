function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Create linked list: 1 -> 2 -> 3 -> 4
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
};

// Reverse the list
let newHead = reverseList(head);

let curr = newHead;
while (curr) {
    console.log(curr.val);
    curr = curr.next;
}