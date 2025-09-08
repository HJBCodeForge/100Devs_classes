//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
function pokemoinParty(party){

    console.log(party.reverse())
}
pokemoinParty(['Pikachu', 'Bulbasaur', 'Charmander', 'Squirtle'])


//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function SqrOverCbrt(){

    let a = [2, 2, 2]
    let b = [2, 2, 2]

    return a.reduce((acc, val) => acc + (val ** 2), 0) > b.reduce((acc, val) => acc + (val ** 3), 0)
}
console.log(SqrOverCbrt())


//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
let arr1 = [22, -6, 32, 82, 9, 25]
let arr2 = [68, -1, 1, -7, 10, 10]

let mods = arr1.filter((x, i) => x % i == 0)
let mods2 = arr2.filter((x, i) => x % i == 0)

console.log(mods, mods2)

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumOfAll(arr){
    return arr.reduce((acc, cval) => acc + Number(cval), 0)
} 

console.log(sumOfAll(['2', 1, 0.23, '7']))