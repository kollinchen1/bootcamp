function alertWeather() {
    alert("Loading weather report...");
}
var weathersC = ["24°","18°","27°","19°","21°","16°","26°","21°"];
var weathersF = ["75°","65°","80°","66°","69°","61°","78°","70°"];
var prefix = 'temperatures';
var id;
var cookiesVis = document.getElementById("cookies");
function chooseScale(element){
    console.log(element.value);
    if((element.value).includes("C")){
        for(var i = 1; i<=weathersC.length; i++){
            id = document.getElementById(prefix+i);
            id.innerHTML = weathersC[i-1];
        }
        console.log("C");
    }
    else{
        for(var i = 1; i<=weathersF.length; i++){
            id = document.getElementById(prefix+i);            
            id.innerHTML = weathersF[i-1];
        }
        console.log("F");
    }
    // document.getElementById("connectionNumber").innerHTML = numConn;
}
function hideCookies(){
    cookiesVis.style.display = "none";

}