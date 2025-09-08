// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
const Qs = 'Is this a question?'

//alert( Qs.endsWith('?'))

// if (Qs[Qs.length -1] === '?'){
//     alert(Qs)
// } else {
//     console.log('This is not a question')
// }
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let CheckOfDev = 'I am a jr. dev and need more training'
//console.log(CheckOfDev.replaceAll('jr. dev', 'software engineer'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
let randomNum = Math.round((Math.random() * 2))

function RockPaperScissors(){
    if (randomNum === 0){
        return 'rock'
    } else if (randomNum === 1){
        return 'paper'
    } else {
        return 'scissors'
    }
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function playTheGame(playerChoice){
    if(playerChoice === 'rock' && RockPaperScissors() === 'scissors' || playerChoice === 'paper' && RockPaperScissors() === 'rock' || playerChoice === 'scissors' && RockPaperScissors() === 'paper'){
        return 'You won!'
    } else if(playerChoice === RockPaperScissors()){
        return 'It is a draw'
    } else {
        return 'You lose!'
    }
}


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function mutiplays(){
    let numberOfPlays = prompt('How many times to you want to play the game?')

    for(let i = 1; i <= numberOfPlays; i++){
        console.log(`Games played: ${i}`)
        let playerChoice = prompt('Do you chose Rock, Paper or Scissors?').toLowerCase()
        console.log(playTheGame(playerChoice))
    }
}
//mutiplays()
