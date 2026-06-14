let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {

    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span
                class="${task.completed ? 'completed' : ''}"
                onclick="toggleTask(${index})">
                ${task.text}
            </span>
            <br>
            <small>${task.createdAt}</small>

            <button onclick="deleteTask(${index})">
                Delete
            </button>
        `;

        taskList.appendChild(li);
        document.getElementById("taskCount").innerText =
       `Total Tasks: ${tasks.length}`;
    });
}

function addTask() {

    const input = document.getElementById("taskInput");

    if (input.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push({
        text: input.value,
        completed: false,
        createdAt: new Date().toLocaleString()
    });
    
    saveTasks();
    renderTasks();

    input.value = "";
}

function deleteTask(index) {

    tasks.splice(index, 1);

    saveTasks();
    renderTasks();
}

function toggleTask(index) {

    tasks[index].completed = !tasks[index].completed;

    saveTasks();
    renderTasks();
}
function clearTasks(){
    tasks = [];
    saveTasks();
    renderTasks();
}

renderTasks();