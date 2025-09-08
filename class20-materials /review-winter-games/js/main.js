//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

// function evenNums(arr){
//     let evenArr = [];
//     arr.forEach(element => {
//         if(element % 2 === 0){
//             evenArr.push(element)
//         }
//     });
//     return evenArr;

// }

function evenNums(arr){
    let evenArr = [];
    arr.map(x => {if (x % 2 === 0){
        evenArr.push(x)
    }})
    return evenArr
}

//console.log(evenNums([12, 5, 7, 8, 6]))

