var count = 3;
var h2 = document.querySelector("#likes");
function increaseLike(){
    console.log(h2);
    count++;
    h2.innerHTML = count +" like(s)";
}


var counts = [9,12,9];
var tag = "";
function increaseLike(a){
    tag = "#likes"+a;
    h2 = document.querySelector(tag);
    counts[a]++;
    h2.innerHTML = counts[a] +" like(s)";
}