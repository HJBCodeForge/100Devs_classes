//Event Listeners
document.querySelector('#yell').addEventListener('click', run)
document.querySelector('#yellingVoices').addEventListener('click', populateVoiceList)

//Select Synth Voice
const synth = window.speechSynthesis;
const voiceSelect = document.querySelector("select");

let voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}

if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

//Utter Name input
function run() {
  const volume = document.querySelector("#volume").value; 
  const fN = document.querySelector('#firstName').value;
  const fM = document.querySelector('#firstMiddle').value;
  const lN = document.querySelector('#lastName').value;

  const yell = `${fN} ${fM} ${lN}`
  document.querySelector('#placeToYell').innerText = yell;
  console.log(yell);

  let utterance = new SpeechSynthesisUtterance(yell);

  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterance.voice = voices[i];
    }
  }

  utterance.volume = volume;
  synth.speak(utterance);

}

