document.querySelector('#yell').addEventListener('click', run)

function run() {
  const fName = document.querySelector('#firstName').value
  const fMidName = document.querySelector('#firstMiddle').value
  const lMidName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value

  document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`

  let yellText = document.querySelector('#placeToYell').innerText
  let yellThis = new SpeechSynthesisUtterance(yellText);

  window.speechSynthesis.speak(yellThis);
}
