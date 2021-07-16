const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

function encodeStr(str) {
    if(str.lengh <= 1) return str;
    
    var finalStr = str[0],count = 1,a = str[0];
    for(var i = 1; i<str.length; i++){
        if(str[i]==a)
        {
            count++;
            continue;
        }
        else{
            finalStr+=count.toString();
            count=1;
            a=str[i];
            finalStr+=a;
        }
    }
    finalStr+=count;
    return finalStr.length<str.length? finalStr:str;
}

function encodeStr(str) {
    var charFrequency = {}  // {a: 4}
    var output = ""   
    // iterate given str, and store them into object like {a: 4}
    for (var chr of str){
        charFrequency[chr] = charFrequency[chr] + 1 || 1
    }
    // iterate object, and concanate its key(char) and value(frequency)
    for (var char in charFrequency){
        output += char + (charFrequency[char]).toString()
    }
    // if length of encoded string is less than original string, return output, or else return original str
    return (output.length < str.length ? output : str);
}

console.log(encodeStr(str1))
console.log(encodeStr(str2))
console.log(encodeStr(str3))
console.log(encodeStr(str4))
const str1 = "a3b2c1d3";
// const str1 = "a9b3c9d3";
const expected1 = "aaabbcddd";
function decodeStr(str){
    finalStr = "";
    if(str.length <=1) return str;
    for( var i = 0; i<str.length;i+=2){
        if(!isNaN(str[i+1])){
            for(var j = 0; j<parseInt(str[i+1]);j++){
                finalStr+=str[i];
            }
        }
        else{
            finalStr+=str[i];
        }        
    }
    return finalStr;
}
console.log(decodeStr(str1))
