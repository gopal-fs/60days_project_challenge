let search=document.getElementById("search")

document.addEventListener("keydown",function(event){
    let value=search.value
    if(event.key==="Enter" && value!=="" && value!==" "){
        document.querySelector(".color").style.backgroundColor=`${value}`
        return 

    }
    

})