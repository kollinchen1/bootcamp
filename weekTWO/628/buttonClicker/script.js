function clickedLikes() {
    alert("Ninja was liked");
}
function hideMe(element){
    element.style.display="none";
}
function loginOrLogout(element){
    console.log(element.innerHTML);
    if(element.innerHTML=="Login"){
        document.getElementById("loginStatus").innerHTML = "Logout";
    }
    else{
        document.getElementById("loginStatus").innerHTML = "Login";
    }
//     console.log(element.innerHTML);
//     if(element.innerHTML=="Login"){
//         element.innerHTML=="Logout";
//     }
//     element.innerHTML=="Login";
}
