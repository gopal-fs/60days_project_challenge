document.querySelectorAll("p").forEach(element => {
    element.style.backgroundColor=`${element.textContent}`
    element.onclick=function(){
        document.querySelector('body').style.backgroundColor=`${element.textContent}`
    }
});
