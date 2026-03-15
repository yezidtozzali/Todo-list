import { format } from "date-fns";
import displayProjectContent from "./displayContent";
import formTask, { setEditMode } from "./formTask";
import createTaskElement from "./createTaskElement";
import taskListener from "./taskListener";



const displayTask = (newProject,listProject) => {
    const content = document.querySelector(".content");
    
    
    

    newProject.task.forEach(task => {

        const {divCheckTask, checkbox, editOption, deleteOption, divTask, nameTask, descriptionTask, dueDateTask} = createTaskElement(task);
        

        taskListener(divTask, deleteOption, editOption, checkbox, task, newProject, listProject, nameTask, descriptionTask, dueDateTask, () => displayProjectContent(newProject, listProject));

            

        content.appendChild(divCheckTask);
        
    });
};

export default displayTask;