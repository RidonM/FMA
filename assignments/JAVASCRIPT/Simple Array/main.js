let addTask = document.getElementById('tasklist');
taskList = [];

for (let i = 0; i < 5; i++) {
    let task = prompt('Write your task:');
    taskList.push(task);
}

taskList.forEach(task => {
    let addList = document.createElement('li');
    addList.textContent = task;
    addTask.appendChild(addList);
});