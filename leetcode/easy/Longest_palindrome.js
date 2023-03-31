let countChar = (string, c) => {
    let count;
    let array = Array.from(string);
    
    count = array.reduce((cnt, element) => cnt + (c === element), 0);
    
    return count;
}

let longestPalindrome = (s) => {
    let map = new Map();
    let longestLength = 0;
    let numbersOfOdd = 0;
    let count = 0;
    
    if(s.length === 1)
        return s.length;
    for(let char of s)
        map.set(char, countChar(s, char));

    for(let value of map.values())  {
        if(map.size === 1)
            return value;
        if(value % 2 === 0)
            longestLength += value;
        else if (value % 2 === 1)   {
            if(count === 0) {
                longestLength += value;
                count = 1;
            }
            else if(count === 1 || value >= 3)    {
                longestLength += (value - 1);
            }
            else if(count === 1 || value === 1)
                numbersOfOdd = 1;
        }
    }
    return longestLength + numbersOfOdd;
};