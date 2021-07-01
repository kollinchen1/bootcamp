//Always Hungry
function alwaysHungry(arr) {
    var food = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i]=="food"){
            food = 1;
            console.log("yummy");
        }
        
    }
    if(food==0){
        console.log("I'm hungry")
    }
    // your code here 
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


//High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i = 0; i<arr.length; i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }

    }
    // your code here
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// Better than average
function betterThanAverage(arr) {
    var sum = 0;
    for(var i = 0; i<arr.length; i++){
        sum+=arr[i];
    }
    var avg = sum/arr.length;
    // calculate the average
    var count = 0
    for(var i = 0; i<arr.length; i++){
        if(arr[i]>avg){
            count++;
        }
    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// Array Reverse
function reverse(arr) {
    var temp;
    for(var i = 0; i<arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    // your code here
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// Fibonacci Array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(var i = 2; i<n; i++){
        fibArr.push(fibArr[i-1]+fibArr[i-2]);
    }
    // your code here
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
