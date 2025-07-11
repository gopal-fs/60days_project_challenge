let button=document.querySelector('button')

let textElement=document.getElementById("text")
const roles=['Full Stack Developer', 'React Developer', 'MERN Developer', 'Frontend Engineer']
let wordIndex=0 
let charIndex=0
let isDeleting=false

button.onclick=function(){
    document.querySelector('.toast-container').style.display='block'
   
    document.querySelector('.sidebar').style.display='flex'
    setTimeout(function(){

        document.querySelector('.toast-container').style.display='none'

    },2200)
}
function Typer(){
    const currentWord= roles[wordIndex]
    const letter=currentWord.substring(0,charIndex)

    textElement.textContent=letter
    if(!isDeleting && charIndex<currentWord.length){
        charIndex++
        setTimeout(Typer,150)
    }
    else if(isDeleting && charIndex>0){
        charIndex--
        setTimeout(Typer,100)
    }
    else{
        isDeleting=!isDeleting
        if(!isDeleting){
            wordIndex=(wordIndex+1)%roles.length
        }
        setTimeout(Typer,1000)
    }


}

Typer()