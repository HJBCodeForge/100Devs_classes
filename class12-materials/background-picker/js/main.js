document.getElementById('purple').addEventListener('click', purple);
document.getElementById('green').addEventListener('click', green);
document.getElementById('blue').addEventListener('click', blue);
document.getElementById('red').addEventListener('click', red);

function purple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)';
};
function green() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)';
};
function blue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)';
};
function red() {
  document.querySelector('body').style.backgroundColor = 'rgba(255, 0, 0)';
};
