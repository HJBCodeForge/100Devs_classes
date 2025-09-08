//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function Fighter(name, lifePoints, specialMove, jump) {
    this.name = name
    this.lifePoints = lifePoints
    this.specialMove = specialMove
    this.jump = jump
    this.oneMovement = 1.2

    this.forwardDash = function(){
        console.log(`${this.name} dashes forward ${this.oneMovement}`)
    }
    this.backwardDash = function(){
    console.log(`${this.name} dashes backward ${this.oneMovement}`)
    }
    this.jumping = function(){
        if(this.jump === true){
            console.log(`${this.name} is jumping`)
        } else {
            console.log(`${this.name} is standing still`)
        }
    }
}
let chunLi = new Fighter('Chun-Li', 10000, 'Falling Crane', true )
