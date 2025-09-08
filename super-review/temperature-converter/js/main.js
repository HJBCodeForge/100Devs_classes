//Write your pseduo code first! 
//c to f
document.querySelector('button').addEventListener('click', cToF)

function cToF(){
    //need the value in C
    let temp = Number(document.querySelector('input').value)
    //convert C to F
    temp = (temp * 9/5) + 32
    //display F value
    document.querySelector('p').innerText = (`${temp} F`)
}
