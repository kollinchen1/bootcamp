// import { game } from './game.js';
// let val = game();  // val is "Hello";
function playerChange(){
    var value = document.getElementById("num_player").value;
    if(value < 2){
        value = 2
        document.getElementById("num_player").value = value
    }   
    if(value > 4)
    {
        value = 4
        document.getElementById("num_player").value =value

    }
    document.getElementById("demo").innerHTML = "You selected " + value +" players";

    
}

function displayDecks(){
    document.getElementById("demo2").innerHTML = "You selected " + value +" players";
}