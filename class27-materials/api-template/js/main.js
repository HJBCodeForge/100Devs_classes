//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=DNHeNx5ZnBf841EvynWc0ncaV0fFa5VYNxaWfZgs&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        // Check if the API returned an error in the JSON response
      if (data.code) {
        document.querySelector('p').innerText = `Error Code: ${data.code} Message: ${data.msg}`;
        return;
      }

        document.querySelector('iframe').src= ""
        document.querySelector('img').src= ""
        if (data.media_type !== "video"){
          document.querySelector('img').src= data.hdurl
          document.querySelector('p').innerText = data.explanation
        } else {
          document.querySelector('iframe').src= data.url
          document.querySelector('p').innerText = data.explanation
        }

      })
}

