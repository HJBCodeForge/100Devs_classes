//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

if(localStorage.getItem('BookNames')){
  let bookArr = localStorage.getItem('BookNames').split(';')
  bookArr.forEach(book => {
    const li = document.createElement('li')
    document.querySelector('ol').appendChild(li)
    li.textContent = book
  })
}
      
function getFetch(){
  const isbn = document.querySelector('input').value
  console.log(isbn)
  if(!isbn){
          return
  }else {
    const url = `https://openlibrary.org/isbn/${isbn}.json`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
        if(!localStorage.getItem('BookNames')){
          let books = data.title
          localStorage.setItem('BookNames', books)
        }else {
          let books = localStorage.getItem('BookNames') + ';' + data.title
          localStorage.setItem('BookNames', books)
        }
      populateList()
      })
    .catch(err => {
        console.log(`error ${err}`)
    });
  }
}

function populateList(){
  const ol = document.querySelector('ol')
  ol.innerHTML = ''
  let bookArr = localStorage.getItem('BookNames').split(';')
  bookArr.forEach(book => {
    const li = document.createElement('li')
    document.querySelector('ol').appendChild(li)
    li.textContent = book
  })
}
