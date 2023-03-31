let detectCycle = (head) => {
    let fast = head;
    let slow = head;

    while(fast && fast.next)    {
        fast = fast.next.next;
        slow = slow.next;

        //같은 노드를 만났을 때
        if(fast === slow)   {
            //slow를 head 로 초기화
            slow = head;
            while(fast !== slow)    {
                fast = fast.next;
                slow = slow.next;
            }
            return fast;
        }
    }
    return null;
};