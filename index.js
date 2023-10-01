console.log("Hello")
const addBtn=document.querySelector("#add-btn");
const newTaskInput=document.getElementById("new-task");
const taskContainer=document.querySelector("#tasks");
const error=document.getElementById("error");
const countValue=document.querySelector(".count-value");
let taskCount=0;
const displayCount =(taskCount)=>{
    
    countValue.innerText=taskCount;
};
function addTask() {
    console.log("button is clicked")
    const taskName = newTaskInput.value.trim();
    error.style.display = "none";
    if (!taskName) {
        setTimeout(() => {
            error.style.display = "block";
        }, 200);
        return;
    }
    const task = `<div class="task">
    <input type="checkbox" class="taks-check"/>
    <span class="taskname" id="completed">${taskName}</span>
    <button class="edit"><i class="fa fa-edit fa-2x"></i></button>
    <button class="delete"><i class="fa fa-trash fa-2x"></i></i></button>
    </div>`;
    
    taskContainer.insertAdjacentHTML("beforeend", task);
    const deleteButtons=document.querySelectorAll(".delete");
    deleteButtons.forEach(button =>{
        button.onclick = () =>{
            button.parentNode.remove();
            taskCount-=1
            displayCount(taskCount)
        };
    });
    /*const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach((eidButn) => {
        eidButn.onclick =(e)=>{
            let targetElement = e.target;
            if(!(e.target.calssName=="edit")){
                targetElement=e.target.parentElement;
            }
            newTaskInput.value=targetElement.previousElementSibling?.innerText;
            targetElement.parentNode.remove();
            taskCount-=1;
            displayCount(taskCount)
        };
    });*/
    const editButtons = document.querySelectorAll(".edit");
editButtons.forEach((editButton) => {
    editButton.onclick = (e) => {
        let targetElement = e.target;
        if (!(e.target.className == "edit")) {
            targetElement = e.target.parentElement;
        }
        newTaskInput.value = targetElement.previousElementSibling?.innerText;
        targetElement.parentNode.remove();
        taskCount -= 1;
        displayCount(taskCount);
    };
});
    const tasksCheck=document.querySelectorAll(".task-check");
    tasksCheck.forEach((checkbox)=>{
        checkbox.onchange=()=>{
            checkbox.nextElementSibling.classList.toogle("Completed")
            if(checkbox.checked){
                taskCount-=1
            }
            else{
                taskCount+=1
            }
            displayCount(taskCount);
        };
    });
    taskCount+=1
    displayCount(taskCount)
    newTaskInput.value="";
}
addBtn.addEventListener("click",addTask)

window.onload =() =>{
    taskCount=0
    displayCount(taskCount)
    newTaskInput.value=""
}

