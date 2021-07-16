// const arr1 = ["a", "a", "a"];
// const expected1 = {
//     a: 3,
// };

// const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
// const expected2 = {
//     a: 2,
//     b: 1,
//     c: 3,
//     B: 1,
//     d: 1,
// };

// const arr3 = [];
// const expected3 = {};

// function frequencyTableBuilder(arr){
//     if(arr.length < 1 )
//         return {};
//     newArr = {};
//     for(var i = 0; i<arr.length; i++){
//         index = arr[i]
//         if(newArr.hasOwnProperty(index)){
//             newArr[index]++;

//         }
//         else 
//             newArr[index] = 1;

//     }
//     return newArr;
// }
// console.log(frequencyTableBuilder(arr1))
// console.log(frequencyTableBuilder(arr2))
// console.log(frequencyTableBuilder(arr3))


const str1 = "This is a test";
const expected1 = "test a is This";
function reverseWordOrder(wordStr){
    // const myArr = wordStr.split(" ");
    // newArr = "";
    // for(var i = myArr.length-1; i>-1; i--){
    //     newArr += myArr[i]+" ";
    // }
    // return newArr;
    // return wordStr.split(" ").reverse().join(" ");
    return reverseWordOrder(wordStr)

}   
console.log(reverseWordOrder(str1))