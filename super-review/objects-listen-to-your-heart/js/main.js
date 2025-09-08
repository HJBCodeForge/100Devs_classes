//Create a stopwatch object that has four properties and three methods
let stopwatch = { }

stopwatch.color = 'black'
stopwatch.shape = 'round'
stopwatch.minutes = 1
stopwatch.seconds = 10
stopwatch.start = function() {
    console.log(`Time started ${stopwatch.minutes} : ${stopwatch.seconds}`)
}
stopwatch.stop = function() {
    console.log(`Time stopped at ${stopwatch.minutes} : ${stopwatch.seconds}`)
}
stopwatch.reset = function() {
    stopwatch.minutes = 0
    stopwatch.seconds = 0
    console.log(`Time reset to ${stopwatch.minutes} : ${stopwatch.seconds}`)
}