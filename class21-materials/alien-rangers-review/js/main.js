//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['Andor', 'Book of Bobba Fett', 'Ashoka', 'Obiwan']
tvShows.forEach(show => console.log(show))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [1, 4, 5, 12, 3]
let evenNums = arr => arr.filter( number => number % 2 == 0)
console.log(evenNums(nums))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function secondSum(arr){
    let sortedNums = arr.sort((a, b) => a - b)
    let secondNum = Number(sortedNums.slice(1,2))
    let secondLast = Number(sortedNums.slice(-2, -1))

    console.log(secondNum + secondLast)

}

secondSum(nums) 