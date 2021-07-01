
// var countPositives = 0;
// var numbers= [3,4,-2,7,16,-8,0];
// for(var i = 0; i<numbers.length;i++){
//     if(numbers[i]>=0){
//         countPositives++;
//     }
// }
// console.log(countPositives);
// REVERSE AN ARRAY
// CREATE A FUNCTION WHERE GIVEN AN ARRAY YOU REVERSE THE ARRAY AND RETURN THE ARRAY
// ["a", "b", "c", "d", "e"] => ["e", "d", "c", "b", "a"]

// CREATE A FUNCTION WRAPPER (1 param / array type)
// ITERATE THROUGHT ARRAY (FOR LOOP)
// NEED A TEMP VARIABLE TO STORE A VALUE
// SWAP THE VALUES WITHIN THE ARRAY
// RETURN THE ARRAY

// function reverseArray(a){
//     var b, temp;
//     for(var i = 0; i< a.length/2; i++){
//         b=a.length-1-i;
//         temp = a[i];
//         a[i] = a[b];
//         a[b] = temp;
//     }

// }

// var array1 = [1,2,3,4,5,6,7,8,9]; 
// reverseArray(array1);
// console.log(array1);
// var floor = Math.floor(1.9)
// var ceil = Math.ceil(3.2)
// var random = Math.random()

// console.log(floor)
// console.log(ceil)
// console.log(random)

// function d6() {
//     var max = 6
//     var min = 1
//     var roll = Math.floor(Math.random() * (max - min + 1) + min);
//     return roll
// }

// var playerRoll = d6();
// console.log(playerRoll)

// Magic Eight-Ball:
// Using the following array, write a function that will answer all of our questions by randomly choosing a response.
// Our terminal should print out one of these answer upon calling on your function!

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function d6() {
    var max = lifesAnswers.length-1;
    var min = 0;
    var roll = Math.floor(Math.random() * (max - min + 1) + min);
    return roll;
}

console.log(lifesAnswers[d6()]);