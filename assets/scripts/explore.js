// explore.js


window.addEventListener('DOMContentLoaded', init);

function init(){
  console.log("success");
}
const synth = window.speechSynthesis;

const text = document.querySelector("#text-to-speak");
const but = document.querySelector("button");

const select = document.querySelector("#voice-select");

var voiceToSpeak;
const img= document.querySelector("img");
let voices = [];

function loadVoice() {
  var i = 0;
  voices = synth.getVoices();
  for (var v of voices){
    const option = document.createElement("option");
    option.textContent = `${v.name} (${v.lang})`;
    option.setAttribute("value", i);
    select.appendChild(option);
    i++;
  }
}
loadVoice();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = loadVoice;
}


but.addEventListener("click", function(){
  debugger;
  const utter = new SpeechSynthesisUtterance(text.value);
  voiceToSpeak = voices[select.value];
  utter.voice = voiceToSpeak;
  
  
  synth.speak(utter);
  if(synth.speaking){
    img.src = "assets/images/smiling-open.png";
  }
  
  utter.addEventListener('end', function(){
    img.src = "assets/images/smiling.png";
  })
})






