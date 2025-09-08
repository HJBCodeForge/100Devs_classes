// // *Variables*
// // Declare a variable, assign it a value, and alert the value
// let value = 10
// alert(value)
// // Create a variable, divide it by 10, and console log the value
//  const newValue = 50/10
//  console.log(newValue)
// // *Functions*
// // Create a function that multiplys 3 numbers and alerts the product
// function multiplyByThree(n1, n2, n3){
//     product = n1 * n2 * n3
//     alert(product)
// }
// multiplyByThree(2,4,1)
// // Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
// function takesFourNumbers(n1, n2, n3, n4){
//     let result = n1 + n2 - n3 - n4
//     console.log(result) 
// }
// takesFourNumbers(3,3,4,2)
// // *Conditionals*
// // Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
// function threeNumbers (n1, n2, n3){
//     if((100 + n1 -n2) /n3 > 25){
//         console.log("WE HAVE A WINNNA")
//     }
// }
// threeNumbers(50,10,3)
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
// document.querySelector('#submitDay').addEventListener('click', whichDay)

// function whichDay(){
//     let day = document.querySelector('#dayOfWeek').value
//     if(day.toLowerCase() === 'monday' || day.toLowerCase() ==='theusday' || day.toLowerCase() ==='wednesday' || day.toLowerCase() ==='thursday' || day.toLowerCase() ==='friday'){
//         alert('Week Day')
//     } else if(day.toLowerCase() === 'saturday' || day.toLowerCase() ==='sunday'){
//         alert('Weekend')
//     } else {
//         alert('Try Again!')
//     }
// }
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function valueCounter(num){
    for(i = 1; i <= num; i++){
        console.log(i)
        i += 3
    }
}
valueCounter(40)