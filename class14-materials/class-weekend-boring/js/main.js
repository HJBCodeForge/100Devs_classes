//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', run);

function run(){
  day = document.querySelector('#day').value.toLowerCase();
  if(day === 'tuesday' || day === 'thursday') {
    document.querySelector('#placeToSee').innerText = 'It is a class day'
  } else if(day === 'saturday' || day === 'sunday'){
    document.querySelector('#placeToSee').innerText = 'It is a weekend'
  } else {
    document.querySelector('#placeToSee').innerText = 'Boring'
  }
}
