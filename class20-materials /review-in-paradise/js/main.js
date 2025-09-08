// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let favFood = 'Pizza'
//alert(favFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let stringMy = 'Qwsd123'
//alert(stringMy[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function ThreeNums(n1, n2, n3){
    return (n1/ n2) * n3
}
//alert(ThreeNums(3, 5, 2))
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function cuRoot(n1){
    console.log(Math.cbrt(n1).toFixed(4))
}
//cuRoot(24)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function summerOrOther(month){
    if(month.toLowerCase() == 'jun' || month.toLowerCase() == 'jul' || month.toLowerCase() == 'aug' || month.toLowerCase() == 'sep') {
        alert('YaY')
    } else {
        alert('Boo')
    }
}
//summerOrOther('Aug')

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skipping5s(num){
    for(let i = 0; i <= num; i++){
        if(i%5 !== 0){
            console.log(i)
        } 
    }
}
//skipping5s(120)