let cancelBtn = document.getElementById("cancel");
let saveBtn = document.getElementById("save");
let title = document.getElementById("title");
let desc = document.getElementById("desc");
let time = document.getElementById("time");
let addTaskBtn=document.getElementById("addTaskBtn");
let task_todo=document.getElementById("task-todo")


let raw_task=localStorage.getItem("tasks");
let tasks= raw_task && raw_task!=="undefined"?JSON.parse(raw_task):[];
let raw=localStorage.getItem("task_content");
let task_content = raw && raw!=="undefined"?JSON.parse(raw):[];
let selectedTaskId=null;
let storeRespectiveTaskData=[];
let storedTaskData=localStorage.getItem("tasks_data");
storeRespectiveTaskData=storedTaskData && storedTaskData !== "undefined"?JSON.parse(storedTaskData):[];



if(task_content.length>0){
    for(let head of tasks){
        let task_name=document.createElement('div');
        task_name.classList.add("task-name");
        let para=document.createElement("p");
        para.textContent=head.Task_Name;
        task_name.id=head.id;
        task_name.appendChild(para);
        document.querySelector(".task-wrapper").appendChild(task_name)
        
    }
}

else{
    showFirstPage();
}




cancelBtn.onclick = function () {
    showFirstPage();
    
};

saveBtn.onclick = function () {
    if (validateData()) {
        task_content.push({
            id:task_content.length+1,
            name: title.value,
            description: desc.value,
            date: time.value
        });

        let task_name=document.createElement('div');
        task_name.classList.add("task-name");
        let para=document.createElement("p");
        para.textContent=title.value;
        task_name.appendChild(para);
        task_name.id=tasks.length+1;
        tasks.push({
            id:tasks.length+1,
            Task_Name:title.value
        })
        document.querySelector(".task-wrapper").appendChild(task_name)

        localStorage.setItem("tasks",JSON.stringify(tasks));
        localStorage.setItem("task_content", JSON.stringify(task_content));

        title.value = "";
        desc.value = "";
        time.value = "";

        alert("Success");

    }
};

document.querySelectorAll(".Btn").forEach((btn) => {
    btn.onclick = function () {
        document.querySelector(".project-selection").style.display = "none";
        document.querySelector(".task-card").style.display = "block";
        document.querySelector(".project-card").style.display="none";
    };
});

document.querySelector(".task-wrapper").addEventListener("click", function (e) {
    const container = e.target.closest(".task-name");
    if (container) {
        document.querySelector(".project-selection").style.display = "none";
        document.querySelector(".task-card").style.display = "none";
        document.querySelector(".project-card").style.display = "block";
        for(let content of task_content){
           
            if(content.id==container.id){
               selectedTaskId=content.id;
               
                let project_name=document.getElementById("project-name");
                let project_date=document.getElementById("project-date");
                let project_desc=document.getElementById("project-desc");
                project_name.textContent=content.name;
                project_date.textContent=content.date;
                project_desc.textContent=content.description
                let check=false;
                for(let data of storeRespectiveTaskData){
                    if(selectedTaskId===data.id){
                        check=true;
                        let tasks_container=document.createElement("div");
                        tasks_container.classList.add("tasks-container");
                        tasks_container.innerHTML=data.body;
                        document.querySelector(".task-container").appendChild(tasks_container);
                        let button = tasks_container.querySelector("button");
                        if (button) {
                            button.onclick = function () {
                                button.parentElement.remove();
                
                             };
                        }
                    }
                    
                }
                if(!check){
                    document.querySelector(".task-container").innerHTML="";
                }
            }
        }
    }
});

document.getElementById("deleteBtn").onclick=function(){
    if(selectedTaskId===null) return;
    const task_elements=document.querySelectorAll(".task-name");
    task_elements.forEach((element)=>{
        if(Number(element.id)===selectedTaskId){
            element.remove();
        }
    })
    tasks=tasks.filter(t=>t.id!==selectedTaskId);
    task_content=task_content.filter(t=>t.id!==selectedTaskId)
    localStorage.setItem("tasks",JSON.stringify(tasks));
    localStorage.setItem("task_content",JSON.stringify(task_content));
    selectedTaskId=null;
    showFirstPage();


}

addTaskBtn.onclick=function(){
    if(task_todo.value===""){
        alert("Please Enter Valid Task Name!")
    }
    else{
        let value=selectedTaskId;
        let tasks_container=document.createElement("div");
        tasks_container.classList.add("tasks-container")
        let para=document.createElement("p");
        para.textContent=task_todo.value;
        let button=document.createElement("button");
        button.textContent="Clear";
        button.classList.add("hi");
        tasks_container.appendChild(para);
        tasks_container.appendChild(button);
        document.querySelector(".task-container").appendChild(tasks_container);

        store();
        
        button.onclick=function(){
            button.parentElement.remove();
        }
       
        

        function store(){
            storeRespectiveTaskData.push({
                id:value,
                body:tasks_container.innerHTML
            })
        }
       
        localStorage.setItem("tasks_data",JSON.stringify(storeRespectiveTaskData));

    }

}

function validateData() {
    if (title.value === "" || desc.value === "" || time.value === "") {
        alert("Please Enter Valid Details!");
        return false;
    }
    return true;
}

function showFirstPage(){
    document.querySelector(".project-selection").style.display = "block";
    document.querySelector(".task-card").style.display = "none";
    document.querySelector(".project-card").style.display="none";
}

document.querySelector(".fa-bars").onclick=function(){
    document.querySelector(".side-bar").style.display="block"
}

document.addEventListener("click", function (event) {
    const sidebar = document.querySelector(".side-bar");
    const barIcon = document.querySelector(".fa-bars");
    if (!sidebar.contains(event.target) && !barIcon.contains(event.target)) {
        sidebar.style.display = "none";
    }
});

function handleSidebarDisplay() {
    if (window.innerWidth >= 1200) {
        document.querySelector(".side-bar").style.display = "block";
    } else {
        document.querySelector(".side-bar").style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", handleSidebarDisplay);
window.addEventListener("resize", handleSidebarDisplay);

