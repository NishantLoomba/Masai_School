let tasks = ["task1","task2","task3","task4","task5"];


let newTasks = []; 
for (let i = 1; i < tasks.length; i++) { 
    newTasks.push(tasks[i]);
}
tasks = newTasks;


let highPriorityTasks = [
    "task6",
    "task7"
];

newTasks = [];
for (let i = 0; i < highPriorityTasks.length; i++) {
    newTasks.push(highPriorityTasks[i]); 
}
for (let i = 0; i < tasks.length; i++) {
    newTasks.push(tasks[i]);
}
tasks = newTasks; 


let lastTaskIndex = tasks.length - 1;
tasks[lastTaskIndex] = "New task"; 
console.log(tasks);