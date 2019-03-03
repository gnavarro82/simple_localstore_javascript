document.getElementById('formtask').addEventListener('submit', saveTask);

function saveTask(e) {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    //console.log(title, description);
    const task = {
        title: title, // version nueva title
        description: description
    };

    if (localStorage.getItem('tasks') === null) {
        let tasks = [];
        tasks.push(task);//se llena el array
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    getTask();
    document.getElementById('formtask').reset();
    e.preventDefault();
}

function getTask() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksview = document.getElementById('tasks');
    tasksview.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        let title = tasks[i].title;
        let description = tasks[i].description;
        tasksview.innerHTML += `<div class="card mb-3">
        <div class="card-body">
        <p>${title} - ${description}</p>
        <a class="btn btn-danger" onclick="deleteTasks('${title}')">Eliminar</a>
        </div>
        
        
        
        </div>
        `;

    }
}

function deleteTasks(title) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) {
        if(tasks[i].title == title){
               tasks.splice(i, 1); 
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTask();
}

getTask();