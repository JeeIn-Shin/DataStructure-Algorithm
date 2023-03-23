//첫번째 제출 답안
// let pivotIndex = (nums) => {
//     let sums = [0,0];

//     let length = nums.length;
//     console.log(length);
//     for(let index = 0; index < length; index++) {
        
//         for(let left = 0; left < index; left++)    {
//             sums[0] += nums[left];
//         }

//         for(let right = index + 1; right < length; right++) {
//             sums[1] += nums[right];
//         }

//         if(sums[0] === sums[1])
//             return index;
//         else
//             sums = [0,0];
//     }
//     return -1;
// };

//두번째 제출 답안
let pivotIndex = (nums) => {
    let left = [0, ];
    let right = [0, ];
    let sumTheLeft;
    let sumTheRight;

    for(let index = 0; index < nums.length; index++) {
        left = nums.slice(0, index);
        right = nums.slice(index + 1, nums.length);


        sumTheLeft = left.reduce((acc, cur) => acc + cur, 0);
        sumTheRight = right.reduce((acc, cur) => acc + cur, 0);


        if(sumTheLeft === sumTheRight)
            return index;
    }
    return -1;
}

let nums = [1,7,3,6,5,6]
console.log(`result : ${pivotIndex(nums)}`);