console.log("page loaded...");


function editProfile(element){
    var name = window.prompt("Enter your name: ");
    document.getElementById("name").innerHTML = name;
    console.log(element);
}
var numReq = 2,numConn = 418;

function acceptConnection(element,a){
    var x;
    numReq--;
    numConn++;
    document.getElementById("requestNumber").innerHTML = numReq;
    document.getElementById("connectionNumber").innerHTML = numConn;
    switch(a){
        case 1:
            x = document.getElementById("iconTodd");
            break;
        case 2:
            x = document.getElementById("iconPhil");
            break;
    }
    x.style.display = "none";
    console.log(x);
}

function declineConnection(element,a){
    var x;
    numReq--;
    document.getElementById("requestNumber").innerHTML = numReq;
    switch(a){
        case 1:
            x = document.getElementById("iconTodd");
            break;
        case 2:
            x = document.getElementById("iconPhil");
            break;
    }
    x.style.display = "none";
    console.log(element);
}