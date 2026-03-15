import { format } from "date-fns";



const content = document.querySelector(".content");

const createTaskElement = (task) => {
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

    dueDateTask.textContent = task.dueDate 
    ? format(new Date(task.dueDate + "T00:00:00"), "dd/MM/yyyy")
    : "No date";

    const priorityColors = {
        High: "red",
        Medium: "orange",
        Low: "green"
    };

    if(task.done){
        checkbox.checked = true;
        nameTask.classList.add("line-through");
        descriptionTask.classList.add("line-through");
        dueDateTask.classList.add("line-through");

    }

    divTask.style.borderLeft = `8px solid ${priorityColors[task.priority]}`;
    
    
    
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

    return {divCheckTask, checkbox, editOption, deleteOption, divTask, nameTask, descriptionTask, dueDateTask};

};


export default createTaskElement;