import { format } from "date-fns";
import displayProjectContent from "./displayContent";
import formTask, { setEditMode } from "./formTask";



const displayTask = (newProject,listProject) => {
    const content = document.querySelector(".content");
    const dialogTask = document.querySelector(".task-dialog");
    const taskForm = document.querySelector(".task-form");
    const nameTaskInput = document.getElementById("name-task-input");
    const descriptionTaskInput = document.getElementById("description-task-input");
    const dueDateTaskInput = document.getElementById("date-task-input");
    const priorityTaskInput = document.getElementById("priority-task-input");
    const selectedProject = document.getElementById("task-project");
    
    

    newProject.task.forEach(task => {

        const divCheckTask = document.createElement("div");
        divCheckTask.classList.add("check-task");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        
        const divTask = document.createElement("div");
        divTask.classList.add("display-task");

        const infoTask = document.createElement("div");
        infoTask.classList.add("task-info");

        const nameTask = document.createElement("h4");
        nameTask.classList.add("task-title");

        const descriptionTask = document.createElement("p");
        descriptionTask.classList.add("task-description");

        const dueDateTask = document.createElement("p");
        dueDateTask.classList.add("task-date");

        nameTask.textContent = task.name;
        descriptionTask.textContent = task.description;


        console.log(task.dueDate);
        console.log(new Date(task.dueDate + "T00:00:00"));


        dueDateTask.textContent = task.dueDate 
        ? format(new Date(task.dueDate + "T00:00:00"), "dd/MM/yyyy")
        : "No date";

        if(task.priority === "High"){
            divTask.style.borderLeft = "8px solid red";
        } if(task.priority === "Medium"){
            divTask.style.borderLeft = "8px solid orange";
        } if(task.priority === "Low"){
            divTask.style.borderLeft = "8px solid green";
        };



        const options = document.createElement("div");
        options.classList.add("option");

        const editOption = document.createElement("span");
        editOption.classList.add("material-symbols-outlined");
        editOption.classList.add("option-icon");
        editOption.textContent = "edit_square";
        editOption.classList.add("hide");

        const deleteOption = document.createElement("span");
        deleteOption.classList.add("material-symbols-outlined");
        deleteOption.classList.add("option-icon");
        deleteOption.textContent = "delete";
        deleteOption.classList.add("hide");

        divTask.addEventListener("mouseenter", () => {
            deleteOption.classList.toggle("hide");
            editOption.classList.toggle("hide");

        });

        divTask.addEventListener("mouseleave", () => {
            deleteOption.classList.toggle("hide");
            editOption.classList.toggle("hide");

        });

        checkbox.addEventListener("click", () => {
            task.toggleDone();
            if(task.done){
                nameTask.classList.add("line-through");
                descriptionTask.classList.add("line-through");
                dueDateTask.classList.add("line-through");
            } else {
                nameTask.classList.remove("line-through");
                descriptionTask.classList.remove("line-through");
                dueDateTask.classList.remove("line-through");

            }
        })

        editOption.addEventListener("click",() => {
            dialogTask.showModal();
            setEditMode(task);
            nameTaskInput.value = task.name;
            descriptionTaskInput.value = task.description;
            dueDateTaskInput.value = task.dueDate;
            priorityTaskInput.value = task.priority;

            selectedProject.innerHTML = "";

            listProject.forEach(project => {
            const option = document.createElement("option");
            option.value = project.projectId;
            option.textContent = project.name;
            selectedProject.appendChild(option);
            console.log(dueDateTaskInput.value);
            
            setEditMode(task);
            
            });


        });

        deleteOption.addEventListener("click", () => {
            const index = newProject.task.indexOf(task);
            newProject.task.splice(index, 1);
            displayProjectContent(newProject, listProject);
        });

            


        content.appendChild(divCheckTask);
        divCheckTask.appendChild(checkbox);
        divCheckTask.appendChild(divTask);
        divTask.appendChild(infoTask);
        infoTask.appendChild(nameTask);
        infoTask.appendChild(descriptionTask);
        infoTask.appendChild(dueDateTask);
        divTask.appendChild(options);
        options.appendChild(editOption);
        options.appendChild(deleteOption);

    });
};

export default displayTask;