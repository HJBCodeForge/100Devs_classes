//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ['Deathly Hallows', 'Half Blood Prince', 'Philosiphers Stone']
movies.forEach( (x) => document.querySelector('h2').innerText += ` ${x},`)
// for(let i=0; i < movies.length; i++){
//   document.querySelector('h2').innerText += ` ${movies[i]}`;
// }


//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let number = [2, 3, 5, 6]
number.forEach((x, i)=> {
  number[i] = x + 3
})
console.log(number)

//Find the average of all the numbers from question two
let aver = 0;
number.forEach((x) => aver += x)
aver = aver / number.length
console.log(aver)

function friend(friends){
let myFriends = []
for(let i=0; i < friends.length; i++){
  if(friends[i].length === 4){
    myFriends.push(friends[i])
  }
}
return myFriends;
}

console.log(friend(["Ryan", "Kieran", "Mark"]))

