// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function numberCompare(numbers){
    let firstNum = numbers.shift()
    let lastNum = numbers.pop()

    if (firstNum < lastNum){
        alert('Hi')
    } else if(firstNum > lastNum){
        alert('Bye')
    } else if(firstNum === lastNum){
        alert('We close in an hour')
    } else {
        alert('This is not a number')
    }
    
}

numberCompare([2, 4, 5, 12, 3])