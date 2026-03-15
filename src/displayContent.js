import displayTask from "./displayTask";
import formTask from "./formTask";

const displayProjectContent = (project, listProject) => {
     const content = document.querySelector(".content");
    content.innerHTML = "";    

    const divAddTask = document.createElement("button");
    divAddTask.classList.add("add-task-button");
    divAddTask.classList.add("add-new-task");

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

        selectedProject.value = project.projectId;
        
        dialogTask.showModal();
        
    });

        

    const addTaskLogo = document.createElement("span");
    const addTaskText = document.createElement("span");

    addTaskLogo.classList.add("material-symbols-outlined");
    addTaskLogo.textContent = "add_2";
    addTaskText.textContent = "Add task";
    

    divAddTask.appendChild(addTaskLogo);
    divAddTask.appendChild(addTaskText);




    const divTitle = document.createElement("div");
    divTitle.classList.add("title-content");
    const tag = document.createElement("div");
    tag.classList.add("tag");
    tag.style.backgroundColor = project.color;


    const h2 = document.createElement("h2");
    h2.textContent = project.name;

    const description = document.createElement("p");
    description.classList.add("description-project");
    description.textContent = project.description;

    content.appendChild(divTitle)
    divTitle.appendChild(tag);
    divTitle.appendChild(h2);
    content.appendChild(description);

    displayTask(project, listProject);

    content.appendChild(divAddTask);
}


export default displayProjectContent;