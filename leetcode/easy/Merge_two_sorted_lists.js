//원래는 이렇게 작성했고, 로컬환경에서는 문제가 없었는데
// let mergeTwoLists = (list1, list2) => {
//     let list = [ ...list1, ...list2 ];
//     list.sort();
    
//     return list;
// };

// leetcode 에서 돌려보니 아래와 같은 에러가 발생
// Line 14 in solution.js
//     let list = [ ...list1, ...list2 ];
//                     ^
// TypeError: list1 is not iterable
//     Line 14: Char 21 in solution.js (mergeTwoLists)
//     Line 30: Char 19 in solution.js (Object.<anonymous>)
//     Line 16: Char 8 in runner.js (Object.runner)
//     Line 19: Char 26 in solution.js (Object.<anonymous>)
//     at Module._compile (node:internal/modules/cjs/loader:1101:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:17:47

//그래서 수정했는데
// let mergeTwoLists = (list1, list2) => {
//     list1 = Array.from(list1);
//     list2 = Array.from(list2);
//     let list = new Array();
    
//     list = list1.concat(list2);
//     list.sort();
    
//     return list;
// };

// 아니 이게 뭐야..
// Line 39 in solution.js
//              throw new TypeError(__serialize__(ret) + " is not valid value for the expected return type ListNode");
//              ^
// TypeError: [] is not valid value for the expected return type ListNode
//     Line 39: Char 20 in solution.js (Object.<anonymous>)
//     Line 16: Char 8 in runner.js (Object.runner)
//     Line 23: Char 26 in solution.js (Object.<anonymous>)
//     at Module._compile (node:internal/modules/cjs/loader:1101:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:17:47


//깨달았는데, 그리니까 list1, list2 는 new ListNode()로 이뤄진 애들임....
//예... 의도적으로 concat, ..., sort를 막아둔거임
let mergeTwoLists = (list1, list2) => {
    let head = new ListNode();
    let cur = head;

    while(list1 !== null && list2 !== null) {
        if(list1.val < list2.val)   {
            cur.next = list1;
            list1 = list1.next;
        }
        else    {
            cur.next = list2;
            list2 = list2.next;
        }
        cur = cur.next;
    }

    //처음에 이 부분이 없었는데 이럴 경우
    //위에 loop가 작동이 안될 경우 테스트케이스에서 터짐
    if(list1 !== null)
        cur.next = list1;
    else if(list2 !== null)
        cur.next = list2;

    return head.next;
};
