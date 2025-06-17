let cancelBtn = document.getElementById("cancel");
let saveBtn = document.getElementById("save");
let title = document.getElementById("title");
let desc = document.getElementById("desc");
let time = document.getElementById("time");

let raw_task=localStorage.getItem("tasks");
let tasks= raw_task && raw_task!=="undefined"?JSON.parse(raw_task):[];
let raw=localStorage.getItem("task_content");
let task_content = raw && raw!=="undefined"?JSON.parse(raw):[];
let selectedTaskId=null;
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

console.log(task_content)
console.log(tasks)


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
