// add node to the head 

// suppose i have a linked list and i want to add one more node to the head of the list


function addAtHead(val){
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
}
