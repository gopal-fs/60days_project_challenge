let date=new Date();
let hours=document.getElementById("hours");
let mins=document.getElementById("mins");
let secs=document.getElementById("secs");
let getExactTime=date.getHours();
let getExactMinutes=date.getMinutes();
let getExactSeconds=date.getSeconds();






setInterval(function(){
    
    
    getExactTime<10?hours.textContent="0"+getExactTime:hours.textContent=getExactTime;
    getExactMinutes<10?mins.textContent="0"+getExactMinutes:mins.textContent=getExactMinutes;
    getExactSeconds<10?secs.textContent="0"+getExactSeconds:secs.textContent=getExactSeconds;
    
   
    
    getExactSeconds++;
    if(getExactSeconds===60){
        getExactSeconds=0;
        getExactMinutes++;
    }
    else if(getExactMinutes===60){
        getExactMinutes=0;
        getExactTime++;
    }
    else if(getExactTime===24){
        getExactMinutes=0;
        getExactSeconds=0;
        getExactTime=0;
    }
    
},1000)