//Create a constructor with 4 properties and 3 methods
function PizzaMachine(cheese, toppings, shape, size){
    this.cheese = cheese
    this.toppings = toppings
    this.chape = shape
    this.size = size

    this.completed = function(){
        console.log(`This pizza is ${this.size} and has the folowing toppings ${this.cheese}, ${pizza.toping}`)
    }
    this.hot = function(bool){
        if(bool === true){
            console.log('This is a hot pizza')
        } else {
            console.log('The pizza is cold!')
        }
    }
    this.reSized = function(){
        console.log(`This is a ${this.size} pizza`)
    }
}

let pizza = new PizzaMachine('Goats', 'Pineapple', 'square', 'small')