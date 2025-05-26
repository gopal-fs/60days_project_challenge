let result=document.getElementById("result");
let increment=document.getElementById("inc");
let decrement=document.getElementById("dec");
let reset=document.getElementById("res");
let counter_value=0;

increment.addEventListener("click",()=>{
    counter_value+=1;
    console.log(counter_value)
    result.textContent=counter_value;
})

decrement.addEventListener("click",()=>{
    counter_value--;
    result.textContent=counter_value;
})

reset.addEventListener("click",()=>{
    counter_value=0;
    result.textContent=counter_value;
})