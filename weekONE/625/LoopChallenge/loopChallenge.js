// print odds 1-20
for(var i = 0;i<21; i++){
    if(i%2 !==0 ){
        console.log(i);
    }
}

//Decreasing Multiples of 3
for(var i = 100; i>=0; i--){
    if(i%3 ==0){
        console.log(i);
    }
}

//Print the sequence
for( var i = 4; i>=-3.5; i-=1.5){
    console.log(i);
}
//Sigma
var countSigma = 0;
for(var i = 0;i<101; i++){
    countSigma +=i;
}
console.log(countSigma);

//Factorial
var productFac = 1;
for(var i = 2;i<13; i++){
    productFac*=i;
}
console.log(productFac);