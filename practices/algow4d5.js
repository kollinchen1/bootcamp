/*
  Given an array nested with unknown amount of arrays,
  return the integers all under ONE array.
*/

const arr1 = [1, 2, 3, 4, 5, 6];
const expected1 = [1, 2, 3, 4, 5, 6];

const arr2 = [1, 2, [4, 5], 6];
const expected2 = [1, 2, 4, 5, 6];

const arr3 = [1, 2, [3, 4, [5]], 6];
const expected3 = [1, 2, 3, 4, 5, 6];

/* 
  Two useful built in functions:
  Array.isArray() : returns true if argument is an array
    - Array.isArray([1, 2, 3]) => true
    - Array.isArray([4, 5, 6]) => true
    - Array.isArray(1) => false
  
  Array.concat() : concatenates two arrays together
    - arr1.concat(arr2) => [1, 2, 3, 4, 5, 6, 1, 2, [4, 5], 6]
*/

function recursiveFlatten(arr) {
    // if(arr.length == 1) {
    //     console.log("ra",arr)
    //     return arr;
    // }
    // console.log(arr.length)
    let newarr = [];
    for(let i = 0; i<arr.length;i++ ){
        if(Array.isArray(arr[i])){
            newarr = newarr.concat(recursiveFlatten(arr[i]))
        }
        else{
            newarr.push(arr[i])
        }
    }
    return newarr
    // if(Array.isArray(arr[arr.length-1])){
    //     // console.log(arr[arr.length-1],"yes")
    //     pop = arr.pop();
    //     return recursiveFlatten(pop)
    // }
    // else{
    //     pop = arr.pop();
    //     newarr = [pop]
    //     // console.log(newarr)
    // }

    // return recursiveFlatten(arr).concat(newarr)
return newarr.concat(recursiveFlatten(arr))
    // return [].append(recursiveFlatten(arr));
}
console.log(recursiveFlatten(arr1))
console.log(recursiveFlatten(arr2))
console.log(recursiveFlatten(arr3))
