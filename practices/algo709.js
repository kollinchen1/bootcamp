// const str1 = "a x a";
// const expected1 = true;

// const str2 = "racecar";
// const expected2 = true;

// const str3 = "Dud";
// const expected3 = false;

// const str4 = "oho!";
// const expected4 = false;
// console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));
// console.log(isPalindrome(str3));
// console.log(isPalindrome(str4));
function isPalindrome(str){
    // if(str.length <2) return false;
    for(var i = 0; i<str.length/2; i++){
        // console.log(str[i])
        // console.log(str[str.length-i-1])
        if(str[i]!=str[str.length-i-1])
            return false;

    }
    return true;
    return str === str.split("").reverse().join(""); 
}

const str1 = "what up, daddy-o?";
const expected1 = "dad";

const str2 = "uh, not much";
const expected2 = "u";

const str3 = "Yikes! my favorite racecar erupted!";
const expected3 = "e racecar e";

function longestPalindromicSubstring(str) {
    palins = [];
    if(str.length <1) return "";
    if(str.length == 1) return str;
    for(var i = 0; i<str.length; i++){
        for(var j = i+1; j<str.length; j++){
            // console.log(str.substring(i,j))
            if(isPalindrome(str.substring(i,j)))
            {
                palins.push(str.substring(i,j));
                // console.log("yes");
            }
        }
    }
    console.log(palins)
    var longest = palins[0]
    for(var i = 1; i<palins.length;i++){
        if(palins[i].length>longest.length)
        
            longest = palins[i];
    }
    return longest;
}

console.log(longestPalindromicSubstring(str1)); 
console.log(longestPalindromicSubstring(str2));
console.log(longestPalindromicSubstring(str3));