let createBtn=document.querySelector(".btn");
let notesContainer=document.querySelector(".notes-container");
let notes=document.querySelector(".input-box");
function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}
createBtn.addEventListener("click",function(){
    let inputBox=document.createElement('div');
    inputBox.classList.add('input-box');
    let p=document.createElement('p');
    p.setAttribute("contenteditable","true");
    inputBox.appendChild(p);
    let i=document.createElement('i');
    i.classList.add("fa-solid","fa-trash");
    inputBox.appendChild(i);
    notesContainer.appendChild(inputBox);

})
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "I") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        let notes = document.querySelectorAll(".input-box p");
        notes.forEach(note => {
            note.onkeyup = function () {
                updateStorage(); 
            };
        });
    }
});



