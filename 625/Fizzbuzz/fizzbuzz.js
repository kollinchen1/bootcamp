for(var i = 1; i<=100; i++){
    if(i%5 ==0){

        if(i%3 == 0){
            console.log("fizzBuzz");
        }
        else{
            console.log("fizz");
        }
    }
    else if(i%3==0){ // i%3 && i%5
        if(i%5==0){
            console.log("fizzBuzz");
        }
        else{
            console.log("fizz");
        }
    }
    else{
        console.log(i);
    }
    
}
