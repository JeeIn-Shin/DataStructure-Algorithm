// 각 문자열을 숫자로 치환함
// 다만, a - 1, b- 2, 이런 식X
// 입력받은 문자열에서 첫번째 문자부터 1을 부여
// ex, egg => 122, add => 122
// 숫자로 치환된 값이 동일하면 ? true, 아니면 false
let replaceWithNumbers = (string) => {
    let temp = new Map();
    
    for(let index = 0; index < string.length; index++)
        temp.set(string[index], index);

    return temp;
};

let isIsomorphic = (s, t) => {
    let stringMap1 = replaceWithNumbers(s);
    let stringMap2 = replaceWithNumbers(t);
    let valObj1 = [];
    let valObj2 = [];

    for(let index = 0; index < s.length; index++)    {
        valObj1.push(stringMap1.get(s[index]));
        valObj2.push(stringMap2.get(t[index]));
    }

    if(valObj1.toString() === valObj2.toString())
        return true;
    else
        return false;
    
};

//타임은 둘째치고, 메모리를 너무 잡아먹었음
//당연함 선언한게 너무 많음

let s = "foo"
let t = "bra"

console.log(isIsomorphic(s, t));