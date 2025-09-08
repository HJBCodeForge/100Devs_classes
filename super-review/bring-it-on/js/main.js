// *Variables*
// Create a variable and console log the value
let it = "Scarry!"
//console.log(it)
// Create a variable, add 10 to it, and alert the value
let number = 10
//alert(number)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4Nums(n1, n2, n3, n4){
    alert(n1-n2-n3-n4)
}
//sub4Nums(10,2,2,2,2)
// Create a function that divides one number by another and returns the remainder
function divNumAndRemainder(n1,n2){
    return (n1%n2)
}
//console.log(divNumAndRemainder(5,3))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumani(n1, n2){
    let total = n1 + n2
    if(total > 50){
        alert('Jumanji')
    }
}
//jumani(40, 1)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(n1, n2, n3){
    if((n1*n2*n3)%3 === 0){
        alert('ZEBRA')
    }
}
//zebra(4,2,1)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordAndNumber(word, number){
    let counter = 1
    while(counter <= number){
        console.log(word)
        counter++
    }
}
//wordAndNumber('Ble', 3)