import Task from "./task";
import { save } from "./localStorage";

let isEditing = false;
let taskToEdit = null;

const formTask = (listProject, displayProjectContent) => {

    

    const addTask = document.querySelectorAll(".add-new-task");
    const dialogTask = document.querySelector(".task-dialog");

    const taskForm = document.querySelector(".task-form");

    const nameTaskInput = document.getElementById("name-task-input");

    const descriptionTaskInput = document.getElementById("description-task-input");

    const dueDateTaskInput = document.getElementById("date-task-input");

    const priorityTaskInput = document.getElementById("priority-task-input");

    const selectedProject = document.getElementById("task-project");

    

    addTask.forEach(newTask => {
        

        newTask.addEventListener("click", () => {
            selectedProject.innerHTML = "";

            /*const inboxOption = document.createElement("option");
            inboxOption.value = "Inbox";
            inboxOption.textContent = "Inbox";
            selectedProject.appendChild(inboxOption);*/

            dialogTask.showModal();

            listProject.forEach(project => {
            const option = document.createElement("option");
            option.value = project.projectId;
            option.textContent = project.name;
            selectedProject.appendChild(option);
        });


        });
    });

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if(isEditing){
            taskToEdit.name = nameTaskInput.value;
            taskToEdit.description = descriptionTaskInput.value;
            taskToEdit.dueDate = dueDateTaskInput.value;
            taskToEdit.priority = priorityTaskInput.value;
            const selectedId = selectedProject.value;
            const project = selectedId === "Inbox"
            ? listProject.find(p => p.isInbox)
            : listProject.find(p => p.projectId === selectedId);
            
            displayProjectContent(project,listProject);
            dialogTask.close();
            taskForm.reset();
            isEditing = false;
            taskToEdit = null;

        } else{
            
        const name = nameTaskInput.value;
        const description = descriptionTaskInput.value;
        const dueDate = dueDateTaskInput.value;
        const priority = priorityTaskInput.value;
        const selectedId = selectedProject.value;
        const project = selectedId === "Inbox"
        ? listProject.find(p => p.isInbox)
        : listProject.find(p => p.projectId === selectedId);

        const newTask = new Task (name, description, dueDate, priority);
        
        project.addtask(newTask);
        console.log(project.task);
        displayProjectContent(project, listProject);
        dialogTask.close();
        taskForm.reset();

        };
        save(listProject)
    });

    const closeButton = document.querySelector(".close-button-task");

    closeButton.addEventListener("click", (e) => {
        e.preventDefault();
        dialogTask.close();
        taskForm.reset();
    });


    
};

const setEditMode = (task) => {
    isEditing = true;
    taskToEdit = task;
       
};

export default formTask;
export { setEditMode };
