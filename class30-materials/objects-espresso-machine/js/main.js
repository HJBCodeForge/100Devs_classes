//Create an espresso machine class that makes machines with 4 properties and 3 methods

class EspressoMachine{
    constructor(beans, strength, grind, servings){
        this.beans = beans
        this.strength = strength
        this.grind = grind
        this.servings = servings
    }
    makeEspresso() {
        console.log(`Your espresso is being made with ${this.beans} beans and a ${this.grind} ground, it will be ${this.strength}.`)
    }
    start() {
        this.makeEspresso()
    }
    stop(){
        console.log(`Your espresso for ${this.servings}, has been cancelled!`)
    }
}
let darkRoast = new EspressoMachine('Dark Roast', 'Medium', 'fine', 1)
darkRoast.start()