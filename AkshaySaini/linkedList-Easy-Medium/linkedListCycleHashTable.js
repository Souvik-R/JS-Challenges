// find a linked list is a cycle or not 
// Approach - Hash Table

let hasCycle = function (head) {
    let seenNodes = new Set();
    let curr = head;
    while (curr) {
        if (seenNodes.has(curr)) {
            return true;
        };
        seenNodes.add(curr);
        curr = curr.next;
    };
    return false;
};