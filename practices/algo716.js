/* 
    An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
    typically using all the original letters exactly once.
    Is there a quick way to determine if they aren't an anagram before spending more time?
    Given two strings
    return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
// const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
// const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
// const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
// const expected4 = true;

function isAnagram(s1, s2) {
    if(s1.length != s2.length)
        return false
    s1 = s1.toLowerCase()
    s2 = s2.toLowerCase()
    let s1d = {}, s2d = {}, len = s1.length;
    for(let i = 0; i<len;i++){
        index = s1[i]
        if(s1d.hasOwnProperty(index))
            s1d[index]++;
        else 
            s1d[index] = 1;
        index = s2[i]
        if(s2d.hasOwnProperty(index))
            s2d[index]++;
        else 
            s2d[index] = 1;
    }
    for(let key in s1d){
        if(s1d[key]!=s2d[key])
            return false;
    }
    return true;
    return s1.toLowerCase().split("").sort().join("") == s2.toLowerCase().split("").sort().join("");
}

console.log(isAnagram(strA1,strB1))
console.log(isAnagram(strA2,strB2))
console.log(isAnagram(strA3,strB3))
console.log(isAnagram(strA4,strB4))

/* 
    Given a string that may have extra spaces at the start and the end,
    return a new string that has the extra spaces at the start and the end trimmed (removed)
    do not remove any other spaces.
*/

const str1 = "   hello world     ";
// const expected1 = "hello world";

function trim(str) {
    var a, b;
    for(let i = 0;i<str.length; i++){
        if(str[i]!= " "){
            a = i;
            break;
        }
    }
    for(let i = str.length-1;i>-1; i--){
        if(str[i]!= " "){
            b = i;
            break;
        }
    }
    return str.substring(a,b+1);
    return str.trim();
}

console.log(trim(str1));