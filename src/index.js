import Task from "./task";
import Project from "./project";
import "./style.css";
import monkeyImg from "./happymonkey.jpg";
import formProject from "./formProject";
import displayProjects from "./displayProject";
import formTask from "./formTask";
import displayProjectContent from "./displayContent";
import todayDisplay from "./todayDisplay";
import soonDisplay from "./soonDisplay";
import { load } from "./localStorage";


const savedData = load();

let listProject = savedData ? savedData : [];

if(!savedData){
const myProject = new Project("Inbox", "");
myProject.isInbox = true;
listProject.push(myProject);
};


formProject(listProject);
displayProjects(listProject);
displayProjectContent(listProject.find(p => p.isInbox), listProject);
formTask(listProject, displayProjectContent);
console.log(listProject);

const today = document.querySelector(".today");

today.addEventListener("click", (e) => {
    e.preventDefault();

    todayDisplay(listProject);

});

const soon = document.querySelector(".soon");

soon.addEventListener("click", (e) => {
    e.preventDefault()

    soonDisplay(listProject);
});


const projectList = document.getElementById("project-list");


    const inboxProject = listProject.find(p => p.isInbox);
    const inbox = document.querySelector(".inbox");
        

        inbox.addEventListener("click", (e) => {
            

            const content = document.querySelector(".content");
            content.innerHTML = "";
            e.preventDefault();
            displayProjectContent(inboxProject, listProject);
            
        });

        
/*add icon on hover------------------*/
        const projecthover = document.querySelector(".projects-header")
        const addLogo = document.querySelector(".hide");

        projecthover.addEventListener("mouseenter", (e) => {
            addLogo.style.visibility = "visible";
            addLogo.classList.remove("hide");
        });

        projecthover.addEventListener("mouseleave", () => {
            addLogo.classList.add("hide");
            addLogo.style.visibility = "hidden";
        });




/*arrow on click--------------*/
        const projects = document.querySelector(".projects-header");
        const arrow = document.querySelector(".arrow-icon");

        projects.addEventListener("click", () => {
            arrow.classList.toggle("rotate");
            projectList.classList.toggle("visible");
        });

        arrow.addEventListener("click", (e) => {
            e.stopPropagation();
            arrow.classList.toggle("rotate");
            projectList.classList.toggle("visible");
        });

        



document.querySelector('.right-header img').src = monkeyImg;

document.querySelector('.projects-header img').src = monkeyImg;






