

// Floyed Algo = slow and fast pointer

let hasCycle = function(head){
    let slow = head;
    let fast = head.fast;

    while(slow != fast){
        if(fast != null || fast.next != null){
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}