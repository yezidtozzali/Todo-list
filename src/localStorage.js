import Project from "./project";
import Task from "./task";

const save = (listProject) =>{
    localStorage.setItem("project", JSON.stringify(listProject));
};

const load =() =>{
    const savedData = JSON.parse(localStorage.getItem("project"));
    if(!savedData) return null;

    const projects = savedData.map(projectData => {
        const project = new Project(projectData.name, projectData.description, projectData.color);

        project.isInbox = projectData.isInbox

        projectData.task.forEach(taskData =>{
            const task = new Task(taskData.name, taskData.description, taskData.dueDate, taskData.priority);
            task.done = taskData.done;
            project.addtask(task);
        });
        return project;
    });

    return projects;


};

export { load , save };

