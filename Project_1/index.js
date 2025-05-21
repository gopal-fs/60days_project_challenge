let name = document.getElementById("name");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");

let boxes = document.getElementById("boxes");


name.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let user_name = name.value.trim();
        
        
        if (user_name === "") {
            alert("Please Enter Your Name to Proceed");
        } else {
            localStorage.setItem("Name",user_name);
            alert("Login Successful!");
            document.getElementById("content").style.display = "none";
            document.getElementById("login-content").style.display="block";
            document.getElementById("login-msg").textContent = `Hello ${user_name}, let me know how I need to rotate your name`;

            boxes.querySelectorAll(".para").forEach(element => {
                element.textContent = user_name;
            });
            document.getElementById("xbutton").onclick=function(){
                document.getElementById("box1").style.animationPlayState="running";

            }
            document.getElementById("ybutton").onclick=function(){
                document.getElementById("box2").style.animationPlayState="running";

            }
            document.getElementById("zbutton").onclick=function(){
                document.getElementById("box3").style.animationPlayState="running";

            }
            document.getElementById("allbutton").onclick=function(){
                document.getElementById("box4").style.animationPlayState="running";

            }
            document.getElementById("home").onclick=function(){
                document.getElementById("login-content").style.display="none";
                document.getElementById("content").style.display="block";
            }

        }
    }
});
