import { isToday } from "date-fns";
import { format } from "date-fns";


const todayDisplay = (listProject) =>{

    const todayTasks = listProject.flatMap(project => project.task).filter(task => isToday(new Date(task.dueDate) ));


    const content = document.querySelector(".content");

    content.innerHTML = "";

    const todayH2 = document.createElement("h2");
    todayH2.style.margin = "16px 27px 32px 27px";
    todayH2.textContent = "Today";
    content.appendChild(todayH2);

    todayTasks.forEach(task => {


        

        const divTask = document.createElement("div");
                const infoTask = document.createElement("div");
                const nameTask = document.createElement("h4");
                const descriptionTask = document.createElement("p");
                const dueDateTask = document.createElement("p");
                
                nameTask.textContent = task.name;
                descriptionTask.textContent = task.description;
                dueDateTask.textContent = format(new Date(task.dueDate), "dd/MM/yyyy");
        
                if(task.priority === "High"){
                    divTask.style.borderLeft = "2px solid red";
                } if(task.priority === "Medium"){
                    divTask.style.borderLeft = "2px solid orange";
                } if(task.priority === "Low"){
                    divTask.style.borderLeft = "2px solid green";
                };
        
                content.appendChild(divTask);
                divTask.appendChild(infoTask);
                infoTask.appendChild(nameTask);
                infoTask.appendChild(descriptionTask);
                infoTask.appendChild(dueDateTask);
        
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

export default todayDisplay;