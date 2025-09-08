
document.querySelector('#run').addEventListener('click', convert)

function convert() {
    const cels = document.querySelector('#cel').value
    let farr = (cels * 9/5) + 32;
    document.querySelector('#far').innerText = farr
}
