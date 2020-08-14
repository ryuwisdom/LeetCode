
const runningSum = function (nums) {

    let arr = []

    let a = 0;
    for (let i = 0; i < nums.length; i++) {
        a = a + nums[i]
        arr.push(a)
    }

    return arr
};


//
console.log(runningSum([1, 2, 3, 4])); // [1,3,6,10]
