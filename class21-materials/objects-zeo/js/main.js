//Create a stopwatch object that has four properties and three methods
//  let stopwatch = {
//     color : 'Black',
//     shape : 'round',
//     start : false,
//     stops : false,
//     startButton : () => {
//         this.start = true;
//         this.stop = false;
//     },
//     stopButton : () => {
//         this.start = false;
//         this.stop = true;
//     },
//     runTime : () => {
//         let currentDate = [];
//         this.start ? currentDate = new Date() : 0
//     },
//     displayTime : () => console.log(this.currentDate)

//  }

 function getCount(str) {
    let counter = 0;
    for(let i = 0; i < str.length; i++){ 
            if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){ 
            counter++
            }
        };
    return counter
  }

  function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

  console.log(getCount("abracadabra"))