
let search=document.getElementById("search");
let page=1
async function appendImages(){
    
    let search_query=search.value;
    if(search_query===""){
        return alert("Please Do Valid Search!")
    }
    let url=`https://api.unsplash.com/search/photos?page=${page}&query=${search_query}&client_id=nujf2As-KGTk-N1IQqNccxvWVp7x_aKizqt0IHeUfk8`
    document.querySelector(".images-container").innerHTML="";
    
    fetch(url)
    .then((response)=>{
        return response.json();

    }).then(data=>{
        const results=data.results;
       
        results.map((res)=>{
            let img=document.createElement('img');
            img.classList.add("image");
            img.src=res.urls.small;
            document.querySelector(".images-container").appendChild(img);
        })
    }).catch((error)=>{
        console.log(error)
    })

}
search.addEventListener("keydown",(e)=>{
   if(e.key==="Enter") appendImages();
})