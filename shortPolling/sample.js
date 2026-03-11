
let lastData=""
const getData=async (lastData)=>{
    try{
        const response=await fetch(`http://localhost:3000/getData?lastData=${lastData}`);
        const data=await response.text();

        document.getElementById("body").innerHTML=data;
        getData(data);
    }
    catch(err){
        console.log(err.message);
        setTimeout(()=>{
            getData(lastData)
        },3000)
    }
    
}

getData();