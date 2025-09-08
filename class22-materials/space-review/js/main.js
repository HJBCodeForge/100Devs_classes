//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1, 2, 4, 7]
let sum = nums.reduce((sum, x) => sum + x, 0)
//alert(sum)

// Create a function that takes in an array of numbers
// Return a new array of numbers that is every original number squared
function squarred(arr){
    return arr.map(num => num * num)
}
//console.log(squarred(nums))

//Create a function that takes string
//Print the reverse of that string to the console
function reversedArr(arr){
    return arr.reverse()
}
//console.log(reversedArr(nums))

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function isItaPalla(str){
    let newStr = str.toLowerCase().match(/[a-z]/g).join('')
    let reversedStr = str.toLowerCase().match(/[a-z]/g).reverse().join('')

    if (newStr === reversedStr){
        alert('It is a palindrome')
    } else {
        alert('It is not a palindrome')
    }
}
//isItaPalla('A dog! A panic in a pagoda!')



