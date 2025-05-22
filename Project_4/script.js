let display=document.getElementById("display-num");
let buttons=document.querySelectorAll(".action-buttons p")
let currentInput="";
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        const value=button.textContent.trim();
        if(value==="C"){
            display.textContent="";
            currentInput="";
        }
        else if(value==="="){
            try{
                const result =eval(currentInput)
                display.textContent=result;
                currentInput=result.toString();
            }
            catch(e){
                display.textContent='Error'
                currentInput="";
            }
            
        }
        else if(button.querySelector(".bi-percent")){
            currentInput+="%"
            display.textContent=currentInput;
        }
        else if(button.querySelector(".bi-x-square")){
            currentInput=currentInput.substring(0,currentInput.length-1)
            display.textContent=currentInput;
        }
        else if(button.querySelector(".bi-slash-lg")){
            currentInput+="/"
            display.textContent=currentInput;
        }
        else if(value==="*"){
            currentInput+="*"
            display.textContent=currentInput;
        }
        else if(button.querySelector(".bi-dash")){
            currentInput+="-"
            display.textContent=currentInput;
        }
        else if(button.querySelector(".bi-plus")){
            currentInput+="+"
            display.textContent=currentInput;
        }
        else if(button.querySelector(".bi-calculator")) {

            alert("Thanks for Using Mini Calculator");
        }
        else{
            currentInput+=value;
            

        }
        if(value!=="C" || value!=="="){
            display.textContent=currentInput;
        }

        
        
    })
})