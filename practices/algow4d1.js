const nums1 = [1,2,3];


function sumArr(nums){
    return nums.length<2? nums[0] : nums[0]+sumArr(nums.slice(1,nums.length))
}
console.log(sumArr(nums1))

/* 
    Recursive Sigma
    Input: integer
    Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

function recursiveSigma(num) {
    num = parseInt(num)
    return num < 1? 0: num + recursiveSigma(num-1)


    return num + recursiveSigma(num+1)
}


console.log(recursiveSigma(num1))
console.log(recursiveSigma(num2))

console.log(recursiveSigma(num3))
