let totalBill=document.getElementById('total-bill');
let tip=document.getElementById('tip');
let people=document.getElementById('people');
let result=document.getElementById('result');
let calcBtn=document.getElementById('calcBtn');
let totalbill=null;
let Tip=null;
let People=null;

totalBill.addEventListener('blur',()=>{
    
   
    
        totalbill=parseInt(totalBill.value);
    
    
})

people.addEventListener("blur",()=>{
    

        People=parseInt(people.value);
       
    
});


function calculate_tip(totalbill,People){
    try{
        
       
        if(totalbill>=1000){
            let Tip=15;
            return Tip;
        }
        else{

            let Tip=10;
            return Tip;
        }
    }
    catch(e){
        alert(`Error :${e.message}`);
    }
}

function validate(totalbill, People, Tip) {
    if (!isNaN(totalbill) && !isNaN(People) && !isNaN(Tip) && totalbill >= 0 && People > 0 && Tip >= 5) {
        return true;
    }
    return false;
}


calcBtn.addEventListener("click",function(){
    totalbill = parseInt(totalBill.value);
    People = parseInt(people.value);
    Tip=calculate_tip(totalbill,People);
    
    if(validate(totalbill,People,Tip)){
        tip.value=Tip;
        let tip_amount=(totalbill*Tip)/100;
        let final_amount=totalbill+tip_amount;
        result.textContent=`Final Amount to be Paid : ${final_amount}`;
        result.style.display="block";
        calcBtn.style.display="none";
        document.getElementById('paynow').style.display="block";
        Tip=calculate_tip(totalbill,People);
        document.getElementById('paynow').addEventListener("click",function(){
            alert("Amount Paid Successfully!")
            people.value="";
            totalBill.value="";
            tip.value="";
            result.style.display='none';
            document.getElementById('paynow').style.display="none";
            calcBtn.style.display='block';

        })

    }
    
    else{
        alert('Please Enter Valid Details!')
    }

    

})