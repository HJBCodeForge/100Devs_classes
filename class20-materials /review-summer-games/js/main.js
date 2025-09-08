//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function multplyNums(arr){
    let multiNums = 1
    arr.forEach(number => multiNums *= number);
    alert(multiNums)
}

multplyNums([2, 4, 3, 2])

