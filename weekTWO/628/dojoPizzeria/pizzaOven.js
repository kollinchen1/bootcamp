var crustTypes = ["deep dish","hand tossed", "flat bread", "sicilian", "new york"];
var sauceTypes = ["traditional","marinara","Creamy Alfredo","Spicy Red","BBQ"];
var cheeseTypes = ["mozzarella","feta","cheddar","goat cheese","american"];
var toppingsTypes = ["peepperoni","mushrooms","extra cheese","sausage","onion",
                        "olives","tomato","peppers","garlic","basil"];


function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var pizza1 = pizzaOven("deep dish","traditional", ["mozzarella"],["peepperoni","sausage"]);
var pizza2 = pizzaOven("hand tossed","marinara", ["mozzarella","feta"],["mushrooms","olives","onions"]);
var pizza3 = pizzaOven("flat bread","Creamy Alfredo", ["mozzarella","cheddar"],["peepperoni","onions","tomato"]);
var pizza4 = pizzaOven("sicilian","Spicy Red", ["mozzarella","goat cheese"],["peepperoni","sausage"]);

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);


console.log(randomPizza());

function randomPizza(){
    var pizza = {};
    var cheeses=[], toppings = [],temp = 0;
    pizza.crustType = crustTypes[randomIndex(crustTypes.length)];
    pizza.sauceType = sauceTypes[randomIndex(sauceTypes.length)];
    var numberOfCheese = randomIndex(cheeseTypes.length);
    var numberOfToppings = randomIndex(toppingsTypes.length);
    
    for(var i = 0; i<numberOfCheese; i++){
        temp = randomIndex(cheeseTypes.length);
        if(cheeses.includes(cheeseTypes[temp])){
            i--;
            continue;
        }
        else{
            cheeses.push(cheeseTypes[temp]);
        }
    }
    for(var i = 0; i<numberOfToppings; i++){
        temp = randomIndex(toppingsTypes.length);
        if(toppings.includes(toppingsTypes[temp])){
            i--;
            continue;
        }
        else{
            toppings.push(toppingsTypes[temp]);
        }
    }
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
function randomIndex(max)
{
    return Math.floor(Math.random() * max);
}