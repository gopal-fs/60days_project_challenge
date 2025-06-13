let lowerCase="abcdefghijklmnopqrstuvwxyz";
let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers="0123456789";
let symbols="`~!@#$%^&*()-_=+";
let allChars=lowerCase+upperCase+numbers+symbols;
let copy=document.getElementById("copy");

let length=12;
let password="";

function generatePassword(){
    password="";
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password+=upperCase[Math.floor(Math.random()*upperCase.length)]
    password+=numbers[Math.floor(Math.random()*numbers.length)]
    password+=symbols[Math.floor(Math.random()*symbols.length)]
    while(length>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)]
    }
    document.getElementById("pass").value=password;
}

copy.addEventListener("click",function(){
    document.getElementById("modal").style.display="block";
    navigator.clipboard.writeText(password);
    setTimeout(function(){
        document.getElementById("modal").style.display="none";
    },2000)
})