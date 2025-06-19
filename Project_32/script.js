let years=document.getElementById("year");
let months=document.getElementById("month");
let days=document.getElementById("day");
let input_data=document.getElementById("date");
input_data.max=new Date().toISOString().split("T")[0];

function calculate(){
    if(input_data.value===""){
        return alert("Please select the date first")
    }
    let Birth_Date=new Date(input_data.value);

    let d1=Birth_Date.getDate();
    let m1=Birth_Date.getMonth()+1;
    let y1=Birth_Date.getFullYear();

    let present_date=new Date();
    let d2=present_date.getDate();
    let m2=present_date.getMonth()+1;
    let y2=present_date.getFullYear();
    let d3,m3,y3;
    y3=y2-y1;
    
    if(m2>=m1){
        m3=m2-m1;
    }
    else{
        y3--;
        m3= 12 + m2-m1;
    }

    if(d2>=d1){
        d3=d2-d1;
    }
    else{
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if(m3<0){
        m3=11;
        y3--;
    }
    days.textContent=d3;
    months.textContent=m3;
    years.textContent=y3;
}
function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}