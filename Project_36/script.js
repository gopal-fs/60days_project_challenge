let qrcode=document.getElementById("qrcode");
let search_text=document.querySelector(".form-control")

function generateQRCode(){
    let value=search_text.value;
    if(value==="") return alert("Please Enter Valid Text Or Url")
        qrcode.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
    qrcode.classList.add("image")
   

}