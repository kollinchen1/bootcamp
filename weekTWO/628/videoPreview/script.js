console.log("page loaded...");

function over(element){
    console.log("over");
    console.log(element);
    element.play();
}

function out(element){
    console.log("out");
    console.log(element);
    element.pause();

}