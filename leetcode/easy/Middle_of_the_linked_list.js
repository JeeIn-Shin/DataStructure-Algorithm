let countNode = (node) => {
    let count = 0;

    while(node) {
        count++;
        node = node.next;
    }

    return count;
};

let middleNode = (head) => {
    let countOfHead = countNode(head);
    let index = 0;
    
    if(countOfHead === 2)
        return head.next;
    else if(countOfHead % 2 === 1)  {
        for(; index < Math.floor(countOfHead / 2); index++)
            head = head.next;
        return head;
    }
    else if(countOfHead % 2 === 0) {
        for(; index < (countOfHead / 2); index++)
            head = head.next;
        return head;
    }
};