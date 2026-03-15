import { setEditMode } from "./formTask";
import displayProjectContent from "./displayContent";
import { save } from "./localStorage";


const taskListener = (divTask, deleteOption, editOption, checkbox, task, newProject, listProject, nameTask, descriptionTask, dueDateTask, onDelete) => {
    const dialogTask = document.querySelector(".task-dialog");
    const nameTaskInput = document.getElementById("name-task-input");
    const descriptionTaskInput = document.getElementById("description-task-input");
    const dueDateTaskInput = document.getElementById("date-task-input");
    const priorityTaskInput = document.getElementById("priority-task-input");
    const selectedProject = document.getElementById("task-project");

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

            };
            save(listProject);
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
        
            
            
            });

            save(listProject);
        });

        deleteOption.addEventListener("click", () => {
            const index = newProject.task.indexOf(task);
            newProject.task.splice(index, 1);
            onDelete();
            save(listProject);
        });
};

export default taskListener;