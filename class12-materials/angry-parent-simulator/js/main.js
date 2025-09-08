synth = window.speechSynthesis;
document.querySelector("#yell").addEventListener('click', yell)

function yell(){
fName = document.getElementById('firstName').value;
fMName = document.getElementById('firstMiddle').value;
lMName = document.getElementById('lastMiddle').value;
lName = document.getElementById('lastName').value;

let placeToYell = `${fName} ${fMName} ${lMName} ${lName}`

document.getElementById('placeToYell').innerHTML = placeToYell;
let yellThis = new SpeechSynthesisUtterance(placeToYell);

synth.speak(yellThis);
}