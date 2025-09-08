// *Variables*
// Create a variable and console log the value
// let value = 10
// console.log(value)

// Create a variable, add 10 to it, and alert the value
let number = 10
number += 10
alert(number)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFourNumbers(n1, n2, n3, n4){
    alert(n1 - n2 - n3 - n4)
}
subFourNumbers(8,2,3,1)

// Create a function that divides one number by another and returns the remainder
function divNumbers(n1, n2){
    return n1%n2
}
console.log(divNumbers(4,2))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumani(n1,n2){
    if(n1+n2 > 50){
        alert('Jumanji')
    }
}
jumani(300,4)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function zebra(n1, n2, n3){
    if((n1*n2*n3)%3 == 0){
        alert('ZEBRA')
    } else{
        alert((n1*n2*n3)%3)
    }
}
zebra(3,3,1)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function numWord(n1, word){
    for(let i=1; i<=n1; i++){
        console.log(word)
    }
}
numWord(3, 'Joe')