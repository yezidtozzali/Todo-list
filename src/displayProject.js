import displayProjectContent from "./displayContent";
import { save } from "./localStorage";

const displayProjects = (listProject) => {
    const arrow = document.querySelector(".arrow-icon");

    const projectUl = document.getElementById("project-list");

    const projectList = document.getElementById("project-list");

    const wasVisible = projectList.classList.contains("visible");
    projectUl.innerHTML = "";
    if (wasVisible) projectList.classList.add("visible");


    

    

    listProject.forEach(project => {
        if (!project.isInbox){
        const newProject = document.createElement("li");
        newProject.classList.add("project-li");
        
        const spanDelete = document.createElement("span");
        spanDelete.classList.add("material-symbols-outlined");
        spanDelete.classList.add("option-icon");
        spanDelete.textContent = "delete";
        spanDelete.classList.add("hide");

        const tag = document.createElement("span");
        tag.classList.add("tag");
        tag.style.backgroundColor = project.color;
        
        const projectTitle = document.createElement("span");
        projectTitle.textContent = project.name;

        newProject.dataset.id = project.projectId;
        
        newProject.addEventListener("click", (e) => {
            const content = document.querySelector(".content");
            content.innerHTML = "";
            e.preventDefault();
            displayProjectContent(project, listProject);
            
        });

        newProject.addEventListener("mouseenter", () => {
            spanDelete.classList.toggle("hide");
            
        });

        newProject.addEventListener("mouseleave", () => {
            spanDelete.classList.toggle("hide");
            

        });

        spanDelete.addEventListener("click", (e) => {
            e.stopPropagation();
            const index = listProject.indexOf(project);
            listProject.splice(index, 1);

            
            save(listProject);
            displayProjects(listProject);

            const inboxProject = listProject.find(p => p.isInbox);
            displayProjectContent(inboxProject, listProject);
        });
        
        projectList.appendChild(newProject);
        newProject.appendChild(tag);
        newProject.appendChild(projectTitle);
        newProject.appendChild(spanDelete);

        }
            

    });
        


};


export default displayProjects;