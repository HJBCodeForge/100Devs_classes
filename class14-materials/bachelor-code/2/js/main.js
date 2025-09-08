//listen for click
const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', andiNext);
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext);

//toggle image to show and hide

function andiNext(){
	andi.classList.toggle('hidden')
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
}

function claireNext(){
	claire.classList.toggle('hidden')
	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
}

function sharleenNext(){
	sharleen.classList.toggle('hidden')
	andi.classList.add('hidden')
	claire.classList.add('hidden')
}