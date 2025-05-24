
let demo_pictures = JSON.parse(localStorage.getItem("Pictures")) || [
    {
        Picture_Name: "Nature",
        Picture_URL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/960px-Altja_j%C3%B5gi_Lahemaal.jpg"
    },
    {
        Picture_Name: "Photography",
        Picture_URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s"
    },
    {
        Picture_Name: "V-Car",
        Picture_URL: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg?impolicy=resize&imwidth=420"
    },
    {
        Picture_Name: "Pets",
        Picture_URL: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
    },
    {
        Picture_Name: "Tiger",
        Picture_URL: "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?cs=srgb&dl=pexels-flickr-145939.jpg&fm=jpg"
    }
];

let upload_btn = document.getElementById("upload-btn");
let final_upload = document.getElementById("final-upload");
let upload_card = document.getElementById("upload-card");
let close_card = document.getElementById("close-card");
let success = document.getElementById("success");
let image = document.getElementById("image");
let pictureName = document.getElementById("pictureName");
let images_container = document.getElementById("images-container");

function renderImages() {
    images_container.innerHTML = ""; 
    for (let picture of demo_pictures) {
        let imgElement = document.createElement("img");
        imgElement.src = picture.Picture_URL;
        images_container.appendChild(imgElement);
    }
}
renderImages();

upload_btn.addEventListener("click", () => {
    upload_card.style.display = "flex";
});

close_card.addEventListener("click", () => {
    upload_card.style.display = "none";
});

function upload(imgUrl, name) {
    if (name.trim().length > 0 && imgUrl) {
        let obj = {
            Picture_Name: name,
            Picture_URL: imgUrl
        };
        
        let updated_pictures = JSON.parse(localStorage.getItem("Pictures")) || demo_pictures;
        updated_pictures.push(obj);
        demo_pictures = updated_pictures;
        localStorage.setItem("Pictures", JSON.stringify(demo_pictures));
        
        
        renderImages();
        
        return true;
    } else {
        alert("Please provide a valid image and name.");
        return false;
    }
}


image.addEventListener("change", () => {
    const file = image.files[0];
    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgUrl = e.target.result; 
            
           
            final_upload.onclick = () => {
                if (upload(imgUrl, pictureName.value)) {
                    upload_card.style.display = "none";
                    success.style.display = "block";
                    setTimeout(() => {
                        success.style.display = "none";
                    }, 2000);
                    pictureName.value = "";
                    image.value = "";
                }
            };
        };
        reader.readAsDataURL(file);

    } else {
        alert("Please select a valid image file.");
    }
});