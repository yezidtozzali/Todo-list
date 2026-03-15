import Project from "./project";
import displayProjects from "./displayProject";
import displayProjectContent from "./displayContent";
import { save } from "./localStorage";

const formProject = (listProject) =>{


const arrow = document.querySelector(".arrow-icon");
const projectList = document.getElementById("project-list");

const addProject = document.querySelectorAll(".new-project");
const dialogProject = document.querySelector(".project-dialog");
const projectForm = document.querySelector(".project-form");
const nameProjectInput = document.getElementById("name-project-input");
const descriptionProjectInput = document.getElementById("description-project-input");
const buttonColor = document.querySelectorAll(".button-color");

let selectedColor = "";

buttonColor.forEach(click => {
    click.style.backgroundColor = click.dataset.color;
    click.addEventListener("click", (e) =>{
        e.preventDefault();
        selectedColor = e.target.dataset.color;
    });

    
});

addProject.forEach(newproject => {


newproject.addEventListener("click", () =>{
    dialogProject.showModal();
});
});




projectForm.addEventListener("submit", (e) => {
    e.preventDefault();

    

    const name = nameProjectInput.value;
    const description = descriptionProjectInput.value;
    const color = selectedColor;
    
    const newProject = new Project (name, description, color);
    
    listProject.push(newProject);

    displayProjects(listProject);
    dialogProject.close();
    projectForm.reset();
    arrow.classList.add("rotate");
    projectList.classList.add("visible");
    save(listProject);
    displayProjectContent(newProject, listProject);
});


    const closeButton = document.querySelector(".close-button");

    closeButton.addEventListener("click", (e) => {
        e.preventDefault();
        dialogProject.close();
        projectForm.reset();
    });
};


export default formProject;