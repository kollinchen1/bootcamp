for(var i = 1; i< 100; i++){
    if(numbers[i]%5){

        if(numbers[i]%3){
            console.log("fizzBuzz");
        }
        else{
            console.log("fizz");
        }
    }
    else if(numbers[i]%3){ // numbers[i]%3 && numbers[i]%5
        if(numbers[i]%5){
            console.log("fizzBuzz");
        }
        else{
            console.log("fizz");
        }
    }
    else{
        console.log(numbers[i]);
    }
    
}
