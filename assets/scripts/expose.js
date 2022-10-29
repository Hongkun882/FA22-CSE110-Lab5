// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  console.log("success");
}


const select1 = document.querySelector("#horn-select");
var img = document.querySelector("img");
const but = document.querySelector("button");
var sound = document.querySelector(".hidden");
var vol = document.querySelector("#volume");
var icon = document.querySelector("div img");
const jsConfetti = new JSConfetti();

select1.addEventListener('change', function () {

  if (select1.value == "air-horn") {
    img.src = "assets/images/air-horn.svg";
    sound.src = "assets/audio/air-horn.mp3";
  }
  else if (select1.value == "car-horn") {

    img.src = "assets/images/car-horn.svg";
    sound.src = "assets/audio/car-horn.mp3";
  }

  else {
    img.src = "assets/images/party-horn.svg";
    sound.src = "assets/audio/party-horn.mp3";
  }
});

but.addEventListener('click', function () {

  

  if(select1.value == "party-horn"){
    jsConfetti.addConfetti();
  }
  sound.play();
});

vol.addEventListener('input', function () {
  if (vol.value == 0){
    icon.src = "assets/icons/volume-level-0.svg";
  }
  else if (vol.value >= 1 && vol.value < 33){
    icon.src = "assets/icons/volume-level-1.svg";
  }
  else if (vol.value >= 33 && vol.value < 67){
    icon.src = "assets/icons/volume-level-2.svg";

  }
  else if (vol.value >= 67){
    icon.src = "assets/icons/volume-level-3.svg";

  }
  
  sound.volume = vol.value * 0.01;

});

