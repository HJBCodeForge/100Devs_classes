//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NextFliexTvShow {
    constructor(geanre, length, ageRestriction, seriesOrMovie){
        this.geanre = geanre
        this.length = length
        this.ageRestriction = ageRestriction
        this.seriesOrMovie = seriesOrMovie
    }

    canYouWatchIt(age){
        console.log(`You are ${age} years old, the age restriction is ${this.ageRestriction}`)
    }
    timeToWatch(){
        console.log(`This ${this.seriesOrMovie} is ${this.length}min's long, do you have enough time to watch it?`)
    }
}
let chucky = new NextFliexTvShow('Horror', 150, 18, 'Movie')
