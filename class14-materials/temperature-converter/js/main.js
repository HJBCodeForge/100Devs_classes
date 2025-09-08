//Write your pseduo code first! 
//1. Listen ofr user input and submit

document.querySelector('#submit').addEventListener('click', run)

function run() {
    let celc = document.querySelector('#celc').value;
    //2. Funtion for convert input to Fahrenheit
    let farhen = celc * 9/5 + 32

    //3. display conferted and Cellsius
    document.getElementById('ferhenDisplay').innerHTML = farhen
}


