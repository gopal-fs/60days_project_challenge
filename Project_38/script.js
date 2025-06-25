let stars=document.querySelectorAll(".star")
let result=document.getElementById("result")

onCodeLoad();
let rated=false;

function onCodeLoad(){
    stars.forEach((star)=>{
        star.addEventListener("click",function(){
            rated=true
            receiveRating(Number(this.getAttribute("cellIndex")))
            
        })
    })

}


function receiveRating(index){
    
    
    stars.forEach(star=>{
        const para=Number(star.querySelector('p').textContent)
        if(para<=index+1){
            const icon=star.querySelector('i')
            icon.style.color='#ffd700'

        }
        else{
            const icon=star.querySelector('i')
            icon.style.color='#ffffff'
        }
        

    })

    let value=index+1;
  

    switch(value){
        case 1:
            result.textContent="Terrible"
            break;
        case 2:
            result.textContent="Bad";
            break;
        case 3:
            result.textContent="Satisfied"
            break;
        case 4:
            result.textContent="Good"
            break;
        case 5:
            result.textContent="Excellent"
            break;

    }

}
document.querySelector("button").addEventListener("click",function(){

    if(!rated) return alert("Please Rate Our Service")
    result.textContent="Rate Your Experience"
        stars.forEach(star=>{
            
            
            const icon=star.querySelector('i')
            icon.style.color='#ffffff'
            
        })
    alert("Feedback Submitted Succesfully!")
})