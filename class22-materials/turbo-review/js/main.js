// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = ' Beer '
let noWhiteSpaces = favDrink.trim()
console.log(noWhiteSpaces)


//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let words = 'The doctor has an apple'
let check = words.includes('apple')
console.log(check)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPapperOrScissors(){
    let randomChoice = Math.random()
    if (randomChoice <= .33){
        return 'Rock'
    } else if (randomChoice > .33 && randomChoice <= .66 ){
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkToWin(playerChoice){
    let pChoice = playerChoice.toLowerCase()
    let computerChoice = rockPapperOrScissors().toLowerCase()
    console.log(`The computors choice was: ${computerChoice}`)
    console.log(`Your choice was: ${pChoice}`)

    if ((pChoice == 'rock' && computerChoice == 'scissors' || (pChoice == 'paper' && computerChoice == 'rock' || (pChoice == 'scissors' && computerChoice == 'paper')))){
        console.log('Player Wins')
    } else if(pChoice === computerChoice){
        console.log('It is a Tie')
    } else {
        console.log('Computer Wins')
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function numberOfplays(choices){
    choices.forEach(choice => checkToWin(choice));
}

numberOfplays(['Rock', 'Paper', 'Scissors'])