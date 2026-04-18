// two pass

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
    return sentinel.head;
}