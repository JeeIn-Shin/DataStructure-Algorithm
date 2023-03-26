//t 전체를 돌면서 s의 문자열이 존재하는지 확인
//s 의 문자열이 t에 순서대로 있다면 true - (순서대로 있다는건 index의 값이 순차적으로 증가하는지로 판단)
//그 외 모두 false

// "abc"
// "ahbgdc"
// "axc"
// "ahbgdc"
// "aaaaaa"
// "bbaaaa"
// ""
// ""
// "bb"
// "ahbgdc"
// "ab" <---- hey;
// "baab"

//잘못된 답
// let isSubsequence = (s, t) => {
//     s = Array.from(s);
//     t= Array.from(t);
//     let prev = -1;
//     let cur = 0;
//     let total = 0;

//     let result = s.some(element => {
//         cur = t.indexOf(element);
//         console.log(cur);
//         if ((cur === -1) || (cur <= prev))
//             return true;
//         total++;
//         prev = cur;
//         console.log(prev);
//     })

//     if(s.length === 0)
//         return true;
//     else if((result === true) || (t.length <= total))
//         return false;
//     else
//         return true;
// };

let isSubsequence = (s, t) => {
    let i;
    let j;

    i = 0;
    j = 0;

    while(i < s.length && j < t.length) {
        if(s[i] === t[j])   {
            i++;
            j++;
        }
        else
            j++;
    }

    if(i === s.length)
        return true;
    else
        return false;
};

let s = "ab"
let t = "ahbgdc"

console.log(isSubsequence(s, t));