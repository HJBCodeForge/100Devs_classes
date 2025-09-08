document.getElementById('shuffleDeck').addEventListener('click', shuffleDeck)

function shuffleDeck(deckId){
    
  if(!localStorage.getItem('deckId')){
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json())
      .then(data => {
        deckId = data.deck_id
        return localStorage.setItem('deckId', deckId)
      })
  } else {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json())
      .then(data => {
      deckId = data.deck_id
      return localStorage.setItem('deckId', deckId)
    })
  }
}

document.getElementById('dealCard').addEventListener('click', drawTwoCards)

function drawTwoCards(){

  fetch(`https://deckofcardsapi.com/api/deck/${localStorage.deckId}/draw/?count=2`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#player1').src = data.cards[0].image
        document.querySelector('#player2').src = data.cards[1].image
        let player1Val = converToNums(data.cards[0].value)
        let player2Val = converToNums(data.cards[1].value)

      if(player1Val > player2Val){
        document.querySelector('h3').innerText = 'Player 1 Wins'
      } else if(player1Val < player2Val){
        document.querySelector('h3').innerText = 'Player 2 Wins'
      } else {
        document.querySelector('h3').innerText = 'Time for War!'
      }
     })
      .catch(err => {
        console.log(`Error: ${err}`)
      })

  function converToNums(value){
    if(value === 'ACE'){
      return 14
    } else if(value === 'KING'){
      return 13
    } else if(value === 'QUEEN'){
      return 12
    } else if(value === 'JACK'){
      return 11
    } else {
      return Number(value)
    }
  }

}


