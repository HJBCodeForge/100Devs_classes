//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(ko, specialMove, taunt, hit){
    this.ko = ko
    this.specialMove = specialMove
    this.taunt = taunt
    this.hit = hit

    this.ShoutWin = function() {
        console.log(`You Win, enimy is ${this.ko}`)
    }
    this.useSpecialMove = function() {
        console.log(`You use ${this.specialMove}`)
    }
    this.useTaunt = function() {
        console.log(`You shout: ${this.taunt}`)
    }
}

let Creep = new StreetFighter('Dead', 'FaceFart', 'Come spank me!', 'Punch! POW!')