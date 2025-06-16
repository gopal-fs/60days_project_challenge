let speech= new SpeechSynthesisUtterance();
let content=document.getElementById("content");
let voices=[];
const voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voiceSelect.innerHTML = ''; 

    voices.forEach((voice, i) => {
        const option = new Option(voice.name + ' (' + voice.lang + ')', i);
        voiceSelect.add(option);
    });
};

voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value];
})

document.querySelector("button").addEventListener("click",function(){
    if(content.value===""){
        speech.text="Please Enter something to Listen";
        window.speechSynthesis.speak(speech)
    }
    speech.text=content.value;
    window.speechSynthesis.speak(speech);
})