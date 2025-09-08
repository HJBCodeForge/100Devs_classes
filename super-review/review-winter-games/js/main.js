//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function evenNums(arr){
    let newArr = []
    arr.forEach((number) => {
        if(number % 2 === 0){
            newArr.push(number)
        }
    })
    return newArr

}

console.log(evenNums([2, 5, 6, 12, 3, 8]))