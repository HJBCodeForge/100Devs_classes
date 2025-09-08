
document.querySelector('#check').addEventListener('click', check)


function check() {

  const day = document.querySelector('#day'.toLowerCase()).value;
  let typeOfDay = "";
  //Conditionals go here
  if (day === "tuesday" || day === "thursday") {
    typeOfDay = "It is a class day";
  } else if(day === "saturday" || day === "sunday"){
    typeOfDay = "It is a weekend";
  } else {
    typeOfDay = "It is a boring Day"
  }

  document.getElementById("placeToSee").innerHTML = typeOfDay;
}
