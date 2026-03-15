import displayProjectContent from "./displayContent";

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
            
        })
        
        projectList.appendChild(newProject);
        newProject.appendChild(tag);
        newProject.appendChild(projectTitle);

        }
            

    });
        


};


export default displayProjects;