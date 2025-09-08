// listen for click
document.querySelector('#finalRose').addEventListener('click', run)
//Hide all image execpt final rose

function run(){
	document.querySelector('#claire').style.display = 'none';
	document.querySelector('#nikki').style.display = '';
	document.querySelector('#sharleen').style.display = 'none';
}