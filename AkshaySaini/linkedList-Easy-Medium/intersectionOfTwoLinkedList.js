// Intersection of a linked list

let findIntersection = function (headA, headB) {
    let newSet = new Set();

    while (headA) {
        newSet.add(headA);
        headA = headA.next;
    }

    while (headB) {
        if (newSet.has(headB)) {
            return headB;
        }
        headB = headB.next;
    }
    return null;
}