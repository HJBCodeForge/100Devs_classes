let total = 0;

document.getElementById('zero0').addEventListener('click', setZero);
document.getElementById('three3').addEventListener('click', plusThree);
document.getElementById('nine9').addEventListener('click', plusNine);
document.getElementById('two2').addEventListener('click', minusTwo);
document.getElementById('five5').addEventListener('click', plusFive);

function setZero() {
  total = 0;
  document.getElementById('placeToPutResult').innerHTML = total;
}

function plusThree() {
  total += 3;
  document.getElementById('placeToPutResult').innerHTML = total;
}

function plusNine() {
  total += 9;
  document.getElementById('placeToPutResult').innerHTML = total;
}

function minusTwo() {
  total -= 2;
  document.getElementById('placeToPutResult').innerHTML = total;
}

function plusFive() {
  total += 5;
  document.getElementById('placeToPutResult').innerHTML = total;
}