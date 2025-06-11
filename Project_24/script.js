let images=[
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyp3I4d1dyUilENcDxwqKHMwcnFrAOq-BBvg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdFrWZakRt3tymkncnRUggZwDiTEwFzdvASA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkr94fF6YanOinMlbFoJ44aGgJCBdBUiSXQ&s',
    'https://cdn1.iconfinder.com/data/icons/weather-429/64/weather_icons_color-02-512.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ryPCbi-yYVssSMiQdO15Gj-Rh23xDJUXL6gGP7XnWdUDpzCPhQinClmZZHfdrJk_h4s&usqp=CAU'
]
let cityName=document.getElementById("cityName");
let place=document.getElementById("place");
let temperature=document.getElementById("temperature");
let humidity=document.getElementById("humidity");
let wind=document.getElementById("wind");

let city=null;

function call(){
    if(cityName.value===""){
        alert("Please Enter Your City Name")
        
    }
    else{
        
        
    city=cityName.value;
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3930638f06ce5c6fd69da442fb768d2f`;
    try{
        fetch(url)
        .then(response =>{
            return response.json();
        })
        .then(data =>{

            try{
                let randvalue = Math.ceil(Math.random() * 4);
                let image=document.getElementById("image");
                image.src=images[randvalue];
                place.textContent=data.name;
                temperature.textContent=data.main.temp;
                humidity.textContent=data.main.humidity;
                wind.textContent=data.wind.speed;

            }
            catch(e){
                alert("City Not Found")
                place.textContent='Germany';
            }
            
        })

    }

    catch(e){
        
        console.log(e.message);
    }
}

}
cityName.addEventListener("keydown",function(event){
    if(event.key==='Enter'){
        call(); 
    }
})
let icon=document.getElementById("icon");
icon.onclick=function(){
    call();

}

