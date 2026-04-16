// remove a given element from a linked list

let removeElements = function(head, val){
    let sentinel = new Node();
    sentinel.next = head;
    let prev = sentinel;
    while(prev && prev.next){
        if(prev.next.val === val){
            prev.next = prev.next.next;
        } else {
            prev = prev.next;
        }
    }
    return sentinel.next;
}