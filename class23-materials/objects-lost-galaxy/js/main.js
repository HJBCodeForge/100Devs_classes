//Create a dog object that has four properties and three methods
let dog = {}
    dog.legs = 4,
    dog.color = 'black',
    dog.tail = 'wagging',
    dog.bark = true,
    dog.play = function(){
        if(this.bark === true){
        console.log(`The ${this.color} dog is barking and ${this.tail} it's tail, and wants to play`)
        }
    },
    dog.alert = function(){
        if(this.bark === true){
        console.log(`The ${this.color} dog is barking something is there!`)
        }
    },
    dog.run = function(){
        if(this.legs === 4){
        console.log(`The ${this.color} dog is running`)
        }
    }
