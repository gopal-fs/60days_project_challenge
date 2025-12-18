const colorPalettes = [
    ["#0F172A", "#1E293B", "#334155", "#64748B", "#CBD5E1", "#F8FAFC"],
  
    ["#1B4332", "#2D6A4F", "#40916C", "#52B788", "#95D5B2", "#D8F3DC"],
  
    ["#3A0CA3", "#4361EE", "#4895EF", "#4CC9F0", "#B5179E", "#F72585"],
  
    ["#FFBE0B", "#FB5607", "#FF006E", "#8338EC", "#3A86FF", "#FFD166"],
  
    ["#2B2D42", "#8D99AE", "#EDF2F4", "#EF233C", "#D90429", "#F8F9FA"],
  
    ["#03045E", "#023E8A", "#0077B6", "#0096C7", "#00B4D8", "#90E0EF"],
  
    ["#582F0E", "#7F4F24", "#936639", "#A68A64", "#B6AD90", "#EDE0D4"],
  
    ["#001219", "#005F73", "#0A9396", "#94D2BD", "#E9D8A6", "#EE9B00"],
  
    ["#240046", "#3C096C", "#5A189A", "#7B2CBF", "#9D4EDD", "#C77DFF"],
  
    ["#0B090A", "#161A1D", "#660708", "#A4161A", "#BA181B", "#E5383B"]
  ];

  document.querySelector('.con-1').style.backgroundColor=colorPalettes[0][0];
    document.querySelector('.con-2').style.backgroundColor=colorPalettes[0][1];
    document.querySelector('.con-3').style.backgroundColor=colorPalettes[0][2];
    document.querySelector('.con-4').style.backgroundColor=colorPalettes[0][3];
    document.querySelector('.con-5').style.backgroundColor=colorPalettes[0][4];
    document.querySelector('.con-6').style.backgroundColor=colorPalettes[0][5];

let copies=document.querySelectorAll(".copy")
copies.forEach((copy)=>{
    copy.addEventListener("click",()=>{
        alert(copy.textContent)
    })
})
function generatePalatte(){
    let randomNumber= Math.floor(Math.random()*10);
    
    document.querySelector('.con-1').style.backgroundColor=colorPalettes[randomNumber][0];
    document.querySelector('.con-2').style.backgroundColor=colorPalettes[randomNumber][1];
    document.querySelector('.con-3').style.backgroundColor=colorPalettes[randomNumber][2];
    document.querySelector('.con-4').style.backgroundColor=colorPalettes[randomNumber][3];
    document.querySelector('.con-5').style.backgroundColor=colorPalettes[randomNumber][4];
    document.querySelector('.con-6').style.backgroundColor=colorPalettes[randomNumber][5];
    let i=0;
    copies.forEach((copy)=>{

        copy.innerHTML=`${colorPalettes[randomNumber][i]}<i class="fa-regular fa-copy"></i>`;
        i++;
    })

}