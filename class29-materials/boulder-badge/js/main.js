// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 
let bulbasaur_CLvl = 5
let caterpie_CLvl = 1
let weedle_CLvl = 1

let bulbaRareCandie = 16 - bulbasaur_CLvl
let caterpieRareCandie = 7 - caterpie_CLvl
let weedleRareCandie = 7 - weedle_CLvl

const totalCandies = bulbaRareCandie + caterpieRareCandie + weedleRareCandie

console.log(totalCandies)
 
//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle

function convertToCelcuis(fahrenheit){
    return (fahrenheit - 32) * 5/9
}

function battleReady(currentTemp){
    let converted = convertToCelcuis(currentTemp)

    if(converted > 0){
        console.log('Charmander is ready to fight!')
    } else{
        console.log('Charmander needs more heat!')
    }
}
battleReady(120)

//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party

let partySize = prompt('How many pokemone is in your party?')

function pintToConsole(partySize){
    let x = 1
    while(x <= partySize){
        console.log("Pikachu I choose you")
        x++
    }  
}
pintToConsole(partySize)
