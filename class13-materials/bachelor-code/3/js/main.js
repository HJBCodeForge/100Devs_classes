// const contestants = document.querySelectorAll('.contestant')

// Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

// function checkForRose(click){
// 	if(click.target.classList.contains('rose')){
// 		document.querySelector('#nikki').classList.toggle('hidden')
// 	}else{
// 		alert("Wrong!");
// 	}
// }
 
// for (let turn = 1; turn <=10; turn ++) {
// 	console.log(`Carousel turn count: ${turn}`)
// }

// let i = prompt('Enter your number:', )
// for (i; i <= 10; i++) {
// 	if (i % 2 === 0) {
// 		console.log(`${i} is a even number`)
// 	} else {
// 		console.log(`${i} is a odd number`)
// 	}
// }


// let number = prompt('Input a multiplication number:');

// 	let number = prompt('Input a multiplication number:');
// 	let tableNumber = 1;

// 	while (tableNumber <= number) {
// 		if (number < 2 || number > 9) {
// 			number = prompt('Choose only numbers between 2 and 9')
// 		} else {
// 		let multi = number * tableNumber;
// 		console.log(multi);
// 		tableNumber ++; }
// 	}

// Function to play the game
// function playGame(){
// 	while(true){
// 		const word = prompt('Enter a word, type "yes" or "no" to exit the game');
	
// 		if (word.toLowerCase() === 'yes' || word.toLowerCase() === 'no'){
// 			alert(`You typed ${word}, the game will end`)
// 			break;
// 		} else {
// 			prompt('Enter another word, type yes or no to exit')
// 		}
// 	}	
// }
// playGame();

// function playGame() {

// 	for (let number =1; number <= 100; number++) {
// 		let fB;
// 		if (number % 3 && number % 5) {
// 			fB = "FizzBuzz";
// 		} else if(number % 3) {
// 			fB = "Fizz";
// 		} else if(number % 5) {
// 			fB = "Buzz";
// 		}
// 		console.log(fB);
// 	}
// }
// playGame();