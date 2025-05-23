let generate_btn=document.getElementById("generate-btn");
let sound=document.getElementById("sound");
let copy=document.getElementById("copy");
let whatsapp=document.getElementById("whatsapp");
let copied_text=document.getElementById("copied-text");
let random_quote=document.getElementById("random-quote");
let author=document.getElementById("author");


let url="https://dummyjson.com/quotes/random";


async function getQuote(){
    generate_btn.textContent="Loading...";
    const response=await fetch(url);
    const data= await response.json();
    random_quote.textContent=data.quote;
    author.textContent="--"+data.author;
    generate_btn.textContent="New Quote";
    return ; 

    

}

function speechTxt(){
    let speechText=new SpeechSynthesisUtterance();
    speechText.text=`${random_quote.textContent}`;
    speechText.voice=window.speechSynthesis.getVoices()[0];
    window.speechSynthesis.speak(speechText);
}



generate_btn.addEventListener("click",getQuote);
sound.addEventListener("click",speechTxt);

copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(random_quote.textContent)
    copied_text.style.animationPlayState="running";
    copied_text.style.display="block";
    setTimeout(function(){
        copied_text.style.animationPlayState="paused";
        copied_text.style.display="none";

    },2000)
})


whatsapp.addEventListener("click",()=>{
    let sendWhatsapp=`https://wa.me/?text=${random_quote.textContent}`
    window.open(sendWhatsapp,"_blank")
})

