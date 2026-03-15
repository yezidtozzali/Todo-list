import { isAfter } from "date-fns";
import { format } from "date-fns";
import createTaskElement from "./createTaskElement";
import taskListener from "./taskListener";


const soonDisplay = (listProject) =>{

    const soonTasks = listProject.flatMap(project => project.task).filter(task => isAfter(new Date(task.dueDate), new Date() ));


    const content = document.querySelector(".content");

    content.innerHTML = "";

    const todayH2 = document.createElement("h2");
    todayH2.style.margin = "16px 27px 26px 27px";
    todayH2.textContent = "Soon";
    content.appendChild(todayH2);

    soonTasks.forEach(task => {
        const taskProject = listProject.find(project => project.task.includes(task));

        const {divCheckTask, checkbox, editOption, deleteOption, divTask, nameTask, descriptionTask, dueDateTask} = createTaskElement(task);

        taskListener(divTask, deleteOption, editOption, checkbox, task, taskProject, listProject, nameTask, descriptionTask, dueDateTask, () => soonDisplay(listProject));

        
    content.appendChild(divCheckTask);

        
});

    const divAddTask = document.createElement("button");
    divAddTask.classList.add("add-task-button");
    divAddTask.classList.add("add-new-task");

    const addTaskLogo = document.createElement("span");
    const addTaskText = document.createElement("span");

    addTaskLogo.classList.add("material-symbols-outlined");
    addTaskLogo.textContent = "add_2";
    addTaskText.textContent = "Add task";
    

    

    divAddTask.addEventListener("click", (e) => {
        e.preventDefault();
        const dialogTask = document.querySelector(".task-dialog");
        
        const selectedProject = document.getElementById("task-project");
        selectedProject.innerHTML = "";

        listProject.forEach(project => {
            const option = document.createElement("option");
            option.value = project.projectId;
            option.textContent = project.name;
            selectedProject.appendChild(option);
        });

        const dueDateTask = document.getElementById("date-task-input");

        dueDateTask.value = format (new Date(), "yyyy-MM-dd");

        
        dialogTask.showModal();
        
    });
    
    divAddTask.appendChild(addTaskLogo);
    divAddTask.appendChild(addTaskText);
    content.appendChild(divAddTask);
};

export default soonDisplay;