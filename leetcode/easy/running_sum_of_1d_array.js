let runningSums = (nums) => {
    let temp;

    for(let i = 0; i < nums.length; i++)    {
        if(i !== 0) {
            temp = nums[i - 1] + nums[i];
            nums[i] = temp;
        }
    }
    return nums;
}

let nums = [1, 1, 1, 1, 1];

let result = runningSums(nums);
console.log(result);