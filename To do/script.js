document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const title = document.getElementById('task-title').value;
    const desc = document.getElementById('task-desc').value;

    if (title === '' || desc === '') {
        alert('Please provide both a title and a description.');
        return;
    }

    const taskItem = createTaskItem(title, desc);
    document.getElementById('pending-tasks').appendChild(taskItem);

    document.getElementById('task-title').value = '';
    document.getElementById('task-desc').value = '';
}

function createTaskItem(title, desc) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.innerHTML = `<strong>${title}</strong>: ${desc}`;

    const actionContainer = document.createElement('div');
    actionContainer.classList.add('task-actions');

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete-btn');
    completeBtn.addEventListener('click', () => completeTask(li));

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', () => editTask(li, title, desc));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => deleteTask(li));

    actionContainer.appendChild(completeBtn);
    actionContainer.appendChild(editBtn);
    actionContainer.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actionContainer);

    return li;
}

function completeTask(taskItem) {
    taskItem.classList.add('completed');
    document.getElementById('completed-tasks').appendChild(taskItem);
    taskItem.querySelector('.complete-btn').remove();
}

function editTask(taskItem, oldTitle, oldDesc) {
    const newTitle = prompt('Edit Task Title:', oldTitle);
    const newDesc = prompt('Edit Task Description:', oldDesc);

    if (newTitle !== null && newDesc !== null) {
        taskItem.querySelector('span').innerHTML = `<strong>${newTitle}</strong>: ${newDesc}`;
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
}
