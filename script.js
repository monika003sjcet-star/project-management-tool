let tasks = [];

function createProject() {
    let name = document.getElementById("projectName").value;

    if (name === "") {
        alert("Please enter project name");
        return;
    }

    alert("Project '" + name + "' Created Successfully!");
    document.getElementById("projectName").value = "";
}

function addTask() {
    let taskName = document.getElementById("taskName").value;
    let deadline = document.getElementById("deadline").value;

    if (taskName === "" || deadline === "") {
        alert("Enter task and deadline");
        return;
    }

    let task = {
        name: taskName,
        deadline: deadline,
        completed: false
    };

    tasks.push(task);
    displayTasks();

    document.getElementById("taskName").value = "";
    document.getElementById("deadline").value = "";
}

function displayTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let div = document.createElement("div");
        div.className = "task";

        div.innerHTML = `
            <b>${task.name}</b> <br>
            Deadline: ${task.deadline} <br>
            Status: ${task.completed ? "Completed" : "Pending"} <br>
            <button onclick="markComplete(${index})">Mark Complete</button>
        `;

        if (task.completed) {
            div.classList.add("completed");
        }

        taskList.appendChild(div);
    });
}

function markComplete(index) {
    tasks[index].completed = true;
    displayTasks();
}