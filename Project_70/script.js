let toggle=document.getElementById("toggle")

toggle.addEventListener("change",(e)=>{
    let body=document.getElementById("body")
    if(e.target.checked){
        
        body.classList.add("dark")

    }
    else{
        body.classList.remove("dark")
    }
})