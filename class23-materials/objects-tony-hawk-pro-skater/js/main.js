//Create a Tony Hawk Pro Skater constructor that makes skating game character with 4 properties and 3 methods
function TonyHawkProSkater(gender, jump, specialMove, catchPrase){
    this.gender = gender,
    this.jump = jump,
    this.specialMove = specialMove,
    this.catchPrase = catchPrase,
    this.jump = function(){
        if(this.jump === true){
        console.log(`The ${this.gender} skater is Jumping`)
        }
    },
    this.shoutCatchPrase = function(){
        if(this.jump === true){
            console.log(`The ${this.gender} shouts, ${this.catchPrase}!`)
        }
    },
    this.forTheWin = function(){
        console.log(`The ${this.gender} skater, is doing a ${this.specialMove}`)
    }
}
femaleSkater = new TonyHawkProSkater('Female', true, 'Kick flip', 'You going down!')