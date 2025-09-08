document.querySelector('#check').addEventListener('click', check);

function check(){
  let day = document.querySelector('#day').value;

  if (day.toLowerCase() === 'tuesday' || day.toLowerCase() === 'thursday'){
    document.querySelector('#placeToSee').innerHTML = "It's a class day"
  } else if(day.toLowerCase() === 'saturday' || day.toLowerCase() === 'sunday') {
    document.querySelector('#placeToSee').innerHTML = "It's a weekend"
  } else {
    document.querySelector('#placeToSee').innerHTML = "It's a boring day"
  }
}