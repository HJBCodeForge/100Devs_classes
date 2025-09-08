//Create a pizza object that has four properties and three methods
let pizza = {}
pizza.cheese = "mozzirella"
pizza.toppings = "Pepperoni"
pizza.chape = "round"
pizza.size = "large"

pizza.completed = function(){
    console.log(`This pizza is ${pizza.size} and has the folowing toppings ${pizza.cheese}, ${pizza.toping}`)
}
pizza.hot = function(bool){
    if(bool === true){
        console.log('This is a hot pizza')
    } else {
        console.log('The pizza is cold!')
    }
}
pizza.size = function(size){
    pizza.size = size
    console.log(`This is a ${pizza.size} pizza`)
}
pizza.size('medium')