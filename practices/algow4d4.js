/* 
    Recursively reverse a string
    helpful methods:
    str.slice(beginIndex[, endIndex])
    returns a new string from beginIndex to endIndex exclusive
*/
const str1 = "abc";
// const expected1 = "cba";

const str2 = "";
// const expected2 = "";

function reverseStr(str) {
    if(str.length == 0 || str.lengt == 1) return str
    return reverseStr(str.slice(1)) + str[0]
}

console.log(reverseStr(str1))
console.log(reverseStr(str2))
/*
    Sum To One Digit
    Implement a function sumToOne(num)​ that,
    given a number, sums that number’s digits
    repeatedly until the sum is only one digit. Return
    that final one digit result.
    Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
// const expected1 = 5;

const num2 = 10;
// const expected2 = 1;

const num3 = 25;
// const expected3 = 7;

const num4 = 49;
// const expected4 = 4;

const num5 = 57;
// const expected5 = 3;

const num6 = 888;
// const expected7 = 6;

const num7 = "hello there";
const expected6 = null;

// function sumToOneDigit(num) {
//     if(isNaN(num) || num < 0) return null
//     if(num<10 && num>-1) return num  //if(num.toString().length ==  1)
//     let  a = num.toString(),newNum = 0
//     for(let i in a)
//         newNum += parseInt(i)
//     return sumToOneDigit(newNum)

// }

function sumToOneDigit(num) {
    if(isNaN(num) || num < 0) return null
    newNum = 0
    n = num.toString().length;
    console.log("length",n)
    while(n!=0){
        console.log("num%10: ",num%10)
        newNum +=num%10
        console.log("newNum: ",newNum)
        num = Math.floor(num/10)
        console.log("num: ",num)
        n--;
    }

}


console.log(sumToOneDigit(num1))
console.log(sumToOneDigit(num2))
console.log(sumToOneDigit(num3))
console.log(sumToOneDigit(num4))
console.log(sumToOneDigit(num5))
console.log(sumToOneDigit(num6))
console.log(sumToOneDigit(num7))
