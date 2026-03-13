export default class Task {
    constructor(name, description, dueDate, priority){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.done = false;
        this.taskId = crypto.randomUUID();
    };

    toggleDone(){
        this.done = !this.done
    };

};
