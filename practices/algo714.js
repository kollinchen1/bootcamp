/* 
  Given a string,
  return a new string with the duplicates excluded
*/

// const str1 = "abcABC";
// const expected1 = "abcABC";

// const str2 = "helloo";
// const expected2 = "helo";

// const str3 = "parallel"
// const expected3 = "parle"

// function stringDedupe(str) {
//     var newStr="";
//     for(let i = 0; i<str.length; i++){
//         if(newStr.indexOf(str[i])==-1){
//             newStr+=str[i];
//         }
//     }
//     return newStr
// }
// console.log(stringDedupe(str1))
// console.log(stringDedupe(str2))
// console.log(stringDedupe(str3))

/*****************************************************************************/

/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

function reverseWords(str) {
    // const myArr = str.split(" ");
    // let newStr="";
    // for(let i = 0; i<myArr.length; i++){
    //     newStr+=reverseHelper(myArr[i])+" "
    // }
    // return newStr;
    let newStr = "",temp="";
    for(let i = 0; i<str.length; i++){
        if(str[i]!=" "){
            temp+=str[i];
        }
        else{
            newStr+=reverseHelper(temp)+" "
            temp=""
        }
    }

    return newStr.length==0? reverseHelper(temp):newStr+reverseHelper(temp);

}
function reverseHelper(str) {
    let temp = "";
    for(let i = str.length-1; i>-1; i--){
        temp += str[i];
    }
    return temp;
}
console.log(reverseWords(str1))
console.log(reverseWords(str2))
console.log(reverseWords(str3))