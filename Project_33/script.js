let today_date= new Date();

const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const months=["January","Febraury","March","April","May","June","July","August","September","October","November","December"];


document.getElementById("date").textContent=today_date.getDate();
document.getElementById("day").textContent=days[today_date.getDay()];
document.getElementById("month").textContent=months[today_date.getMonth()];
document.getElementById("year").textContent=today_date.getFullYear();