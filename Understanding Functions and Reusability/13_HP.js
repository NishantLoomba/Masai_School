let tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];

for (let i = 1; i < tasks.length; i++) {
    tasks[i - 1] = tasks[i];
}
tasks.length = tasks.length - 1; 
tasks.length = tasks.length + 2; 
for (let i = tasks.length - 1; i > 1; i--) {
    tasks[i] = tasks[i - 2]; 
}
tasks[0] = 'High_P Task 1'; 
tasks[1] = 'High_P Task 2';
tasks[tasks.length - 1] = 'New Task 6';
console.log(tasks);