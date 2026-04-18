// two pass approach

let removeNthFromEnd = function (head, n) {
    let sentinel = new Node();
    sentinel.next = head;

    // find the length of the list
    let length = 0;
    while (head) {
        head = head.next;
        length++;
    }

    // find previous node position of N
    let prevPosition = length - n;

    // reach to that prev position
    let prev = sentinel;
    for (i = 0; i < prevPosition; i++) {
        prev = prev.next;
    }

    // delete that Nth node
    prev.next = prev.next.next;

    // return it's head
    return sentinel.next;
}



// one pass approach (Two Pointers)

let removeNthFromEnd = function (head, n) {
    // create sentinel node
    let sentinel = new Node();
    sentinel.next = head;
    // go to the first pointer which start from the n node..and second will start from sentinel
    let first = sentinel;
    for (let j = 0; j < n; j++) {
        first = first.next;
    }
    let second = sentinel;
    // move both pointer till the first goes to the last node
    while (first.next) {
        second = second.next;
        first = first.next;
    }
    // delete the second.next
    second.next = second.next.next;
}