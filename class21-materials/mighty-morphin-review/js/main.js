// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = 'easter'
holiday = 'Christmas'
//console.log(holiday.toUpperCase())

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = 'This is lit'
//alert(str.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subNumbers(nums){
    let difference = 100
    nums.forEach(num => (difference -= num)); 
    alert(Math.abs(difference))
}

//subNumbers([10, 28, 38, 40, 5])

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function sortNums(nums){
    nums.sort((a, b) => a - b)
    console.log(nums[0], nums.pop())
}

//sortNums([1, 5, 3])

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
const headOrTails = () => Math.floor(Math.random() * 2) === 1 ? 'Heads' : 'Tails'


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function runs(rounds){
    let count = 1
    while(count <= rounds){
        console.log(headOrTails())
        count ++
    }
}

runs(5)