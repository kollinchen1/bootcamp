var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
var dojoDiv = document.querySelector("#the-dojo");
    
// Creates the rows of buttons for this game
function render(theDojo) {
  var result = "";
  for(var i=0; i<theDojo.length; i++) {
    for(var j=0; j<theDojo[i].length; j++) {
      result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
    }
  }
  placeNinjas();
  return result;
}
function placeNinjas(){
    var arrayNinjas = [];
    var randomI,randomJ,objectIJ;
    for(var z = 0; z<10; z++){
        randomI = Math.floor(Math.random()*10);
        randomJ = Math.floor(Math.random()*10);
        objectIJ = {i:randomI, j:randomJ}
        if(containsObject(objectIJ,arrayNinjas)){
            console.log("no",objectIJ);
            z--;
            
        }
        else{
            arrayNinjas.push(objectIJ)
            console.log("yes",objectIJ);
        }
    }
    for(var z = 0; z<10; z++){
        console.log(arrayNinjas[z].i,arrayNinjas[z].j)
    }
}
function containsObject(obj, list) {
    for (var z = 0; z < list.length; z++) {
        if (list[z].i === obj.i &&list[z].j === obj.j ) {
            return true;
        }
    }

    return false;
}    
// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
    console.log({i, j});
    var sum = 0;
    // var top = false,right=false,bottom=false, left=false;
    // if(i>0){
    //     top = true;
    //     sum+=theDojo[i-1][j];
    // }
    // if(i<theDojo.length-1){
    //     bottom = true;
    //     sum+=theDojo[i+1][j];
    // }
    // if(j>0){
    //     sum+=theDojo[i][j-1];
    //     left = true;
    // }
    // if(j<theDojo[i].length-1){
    //     sum+=theDojo[i][j+1];
    //     right = true;
    // }
    // if(top&&left){
    //     sum+=theDojo[i-1][j-1];
    // }
    // if(top&&right){
    //     sum+=theDojo[i-1][j+1];
    // }
    // if(bottom&&left){
    //     sum+=theDojo[i+1][j-1];
    // }
    // if(bottom&&right){
    //     sum+=theDojo[i+1][j+1];
    // }
    for(var x = -1; x<2; x++){
        for(var y = -1; y<2; y++){
            if(i+x <0 || i+x>theDojo.length-1 ||  j+y<0 || j+y>theDojo[i].length-1){
                continue;
            }
            else{
                sum+=theDojo[i+x][j+y];
            }
        }
    }
    sum-=theDojo[i][j];
    console.log(sum);
    drawNumber(sum, element);
    // alert(sum);
}
function drawNumber(sum,element){
    element.innerHTML = sum;
}
// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    

