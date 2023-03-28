let reverseList = (head) => {
    let newList = new ListNode();
    let tail = new ListNode();
    let temp = new ListNode();

    tail = head;
    newList = null;

    while(tail !== null)    {
        temp = newList;
        newList = tail;
        tail = tail.next;
        newList.next = temp;
    }
    return newList;
};