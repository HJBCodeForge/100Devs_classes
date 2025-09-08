//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const arrNums = [1, 3, 4, 2, 3]
//alert(arrNums.reduce((sum, x) => sum + x))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function SquarredNums(arr){
    let originalNums = [... new Set(arr)]
    return sqrNums = originalNums.map( num => Math.pow(num, 2))


}
//console.log(SquarredNums(arrNums))


//Create a function that takes string
//Print the reverse of that string to the console
let str = 'Here we go'
function reversStr(str){
    return str.split('').reverse().join('')
}
//console.log(reversStr(str))

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function checkPallindrome(str){
    let reversedStr = str.replace(/[^A-Za-z0-9]/g, '').split('').reverse().join('').toLowerCase()
    str = str.replace(/[^A-Za-z0-9]/g, '').split('').join('').toLowerCase()

    if(str === reversedStr){
        alert('It is a Palindrome')
    } else {
        alert('It is not a Palindrome')
    }
}
checkPallindrome('Ah. Satan sees Natasha')