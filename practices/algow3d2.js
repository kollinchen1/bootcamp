/* 
    Array: Binary Search (non recursive)
    Given a sorted array and a value, return whether the array contains that value.
    Do not sequentially iterate the array. Instead, ‘divide and conquer’,
    taking advantage of the fact that the array is sorted .
*/

// if n is the number of elements
// then a normal search through an array would be n operations O(n)
// binary search is O(log(n)) this is much faster than O(n)

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

const nums4 = [4, 5, 6, 8, 12];
const searchNum4 = 12;
const expected4 = true;

const nums5 = [3, 4, 6, 8, 12];
const searchNum5 = 22;
const expected5 = false;



function binarySearch(sortedNums, searchNum) {
    while(true){
        if(sortedNums.length <1) return false
        if(sortedNums.length ==1 && sortedNums[0] != searchNum) return false
        mid = parseInt(sortedNums.length/2)
        if(sortedNums[mid] == searchNum)
            return true;
        if(sortedNums[mid]>searchNum){
            sortedNums = sortedNums.slice(0,mid)
        }
        else{
            sortedNums = sortedNums.slice(mid+1)
        }
    }

}
console.log(binarySearch(nums1,searchNum1))
console.log(binarySearch(nums2,searchNum2))
console.log(binarySearch(nums3,searchNum3))
console.log(binarySearch(nums4,searchNum4))
console.log(binarySearch(nums5,searchNum5))