export default class Project{
    constructor(name, description, color){
        this.name = name;
        this.description = description;
        this.color = color;
        this.projectId = crypto.randomUUID();
        this.task = [];
    };

        addtask(task){
            this.task.push(task);
        
    };


    };
