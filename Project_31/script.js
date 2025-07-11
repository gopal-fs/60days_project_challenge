let toast_container=document.getElementById("toast");


let successMsg="Successfully Submitted!";
let errorMsg="Please fix the error!";
let invalidMsg="Invalid,input check again!"

function showToast(msg){
    let toast=document.createElement("div");
    toast.classList.add("toast");
    let para=document.createElement("p");
    para.textContent=msg;
    let iTag=document.createElement("i");
    iTag.classList.add("fa-solid");

    if(msg==="Successfully Submitted!"){
        iTag.classList.add("fa-circle-check");
        
    }
    else if(msg==="Please fix the error!"){
        iTag.classList.add("fa-circle-xmark");

        toast.classList.add('error');
    }
    else{
        iTag.classList.add("fa-circle-exclamation")
        toast.classList.add('invalid')
    }

    toast.appendChild(iTag);
    toast.appendChild(para);
    toast_container.appendChild(toast)

    setTimeout(function(){
        toast.remove();
    },1000)

}