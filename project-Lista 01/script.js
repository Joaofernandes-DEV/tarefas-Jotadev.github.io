document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskInput = document.getElementById('task-input');
    const categoryInput = document.getElementById('category-input');
    const dateInput = document.getElementById('date-input');

    const taskText = taskInput.value;
    const categoryText = categoryInput.value;
    const dateText = dateInput.value;

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText} <span class="category">(${categoryText})</span> <span class="date">[${dateText}]</span>
        <button onclick="removeTask(this)">Remove</button>
    `;

    const taskList1 = document.getElementById('task-list-1');
    const taskList2 = document.getElementById('task-list-2');

    if (taskList1.children.length < 8) {
        taskList1.appendChild(li);
    } else {
        taskList2.appendChild(li);
    }

    taskInput.value = '';
    categoryInput.value = '';
    dateInput.value = '';
});

function removeTask(button) {
    button.parentElement.remove();
}
