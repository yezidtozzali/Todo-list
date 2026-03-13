import Task from "./task";
import Project from "./project";
import "./style.css";
import monkeyImg from "./happymonkey.jpg";
import formProject from "./formProject";
import displayProjects from "./displayProject";
import formTask from "./formTask";
import displayProjectContent from "./displayContent";
import todayDisplay from "./todayDisplay";


let listProject = [];


const myProject = new Project("Inbox", "");
myProject.isInbox = true;
listProject.push(myProject);


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

        const arrow = document.querySelector(".arrow-icon");

        arrow.addEventListener("click", (e) => {
            arrow.classList.toggle("rotate");
            projectList.classList.toggle("visible");
        });



document.querySelector('.right-header img').src = monkeyImg;

document.querySelector('.projects-header img').src = monkeyImg;






