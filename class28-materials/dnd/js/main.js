//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.name
        let classes = data.classes
        document.querySelector('div').innerHTML = ''
        
        classes.forEach(obj => {
            const classesName = document.querySelector('div').appendChild(document.createElement('h3'))
            classesName.innerText = obj.name

            const subClassName = document.querySelector('div').appendChild(document.createElement('h4'))
            subClassName.innerText = "Sub Classes?"

            let subClasses = data.subclasses
            const createUl = document.querySelector('div').appendChild(document.createElement('ul'))
            subClasses.forEach(obj => {
                const subClassList = createUl.appendChild(document.createElement('li'))
                subClassList.innerText = obj.name    
            })
        })
        
    })
    .catch(err => {
            console.log(`error ${err}`)
        });
}
