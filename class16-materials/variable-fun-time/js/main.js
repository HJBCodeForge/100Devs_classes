//--- Easy
//create a variable and assign it a number
let dog = 9;
//minus 10 from that number
dog -= 10;
//print that number to the console
console.log(dog)
//--- Medium
//create a variable that holds a value from the input
let inpValue = document.getElementById('danceDanceRevolution').value
//add 25 to that number
inpValue += 25
//alert that number
alert(inpValue)
//--- Hard
//create a variable that holds the h1
const headOne = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
headOne.addEventListener('click', run);

function run(){
    let sum = dog + Number(inpValue)
    console.log(sum)
}
