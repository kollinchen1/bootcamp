/* 
    Given a SORTED array of integers, dedupe the array 
    Because array elements are already in order, all duplicate values will be grouped together.
    Ok to use a new array
    Bonus: do it in O(n) time (no nested loops, new array ok)
*/
const nums1 = [1, 1, 1, 1];
// const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
// const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
// const expected3 = [1, 2, 3, 4];

function dedupeSorted(nums) {
    var newArr = [];
    for (var i=0; i<nums.length; i++) {
        if (!newArr.includes(nums[i])) {
            newArr.push(nums[i]);
        }
    }
    return newArr
}
console.log(dedupeSorted(nums1))
console.log(dedupeSorted(nums2))
console.log(dedupeSorted(nums3))

/* 
    Array: Mode
    Create a function that, given an array of ints,
    returns the int that occurs most frequently in the array.
    What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
    - return empty array
*/
const nums4 = [];
const expected1 = [];

const nums5 = [1];
const expected2 = [1];

const nums6 = [5, 1, 4];
const expected3 = [];

const nums7 = [5, 1, 4, 1];
const expected4 = [1];

const nums8 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];

function mode(nums) {
    if(nums.length<2)
        return nums
    let dict = {}, newArr = [], largest = 0, allSame = true;
    for(let i  = 0; i<nums.length; i++){
        index =  nums[i]
        dict.hasOwnProperty(nums[i])? dict[index]++ : dict[index] = 1
        dict[index] > largest? largest = dict[index] : largest
    }
    for (const [key, value] of Object.entries(dict)) {
        console.log(key, value);
    }
    // for(let key in dict){
    //     dict[key] == largest? newArr.push(key): allSame=false
    // }
    // return !allSame?  newArr : []

}

console.log(mode(nums4))
console.log(mode(nums5))
console.log(mode(nums6))
console.log(mode(nums7))
console.log(mode(nums8))
