//Create an a class and extend it - Can be anything you would like it to be! 
class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} is making a noise!`)
    }
}

class Cat extends Animal{
    constructor(name, breed){
        super(name)
        this.breed = breed
    }
}

let cat = new Cat('Pickles', "dumbCat")

cat.speak()
cat.breed
