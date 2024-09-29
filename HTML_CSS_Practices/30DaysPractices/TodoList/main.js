// Selecting DOM elements
const input = document.querySelector('input');
const button = document.querySelector('button');
const form = document.querySelector('form');
const todos = document.querySelector('.todos');

// Load todos from localStorage when the page loads
document.addEventListener('DOMContentLoaded', function () {
    loadTodos();
});

// Form submit event
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let value = input.value.trim();

    if (value) {
        addTodoElement({
            text: value,
            status: 'active'
        });
        saveTodoList();
    }
    input.value = '';
});

// Add a new todo item
function addTodoElement(todo) {
    var li = document.createElement('li');
    li.innerHTML = `
        <span>${todo.text}</span>
        <i class="fas fa-trash-alt"></i>
    `;

    if (todo.status === 'completed') {
        li.setAttribute('class', 'completed');
    }

    // Toggle completed status
    li.addEventListener('click', function () {
        this.classList.toggle('completed');
        saveTodoList();
    });

    // Remove todo item
    li.querySelector('i').addEventListener('click', function (e) {
        e.stopPropagation();
        this.parentElement.remove();
        saveTodoList();
    });

    todos.appendChild(li);
}

// Save todos to localStorage
function saveTodoList() {
    let todosList = document.querySelectorAll('li');
    let todoStorage = [];
    todosList.forEach(function (todo) {
        let text = todo.querySelector('span').innerText;
        let status = todo.classList.contains('completed') ? 'completed' : 'active';

        todoStorage.push({
            text,
            status
        });
    });
    localStorage.setItem('todoList', JSON.stringify(todoStorage));
}

// Load todos from localStorage
function loadTodos() {
    let todoStorage = localStorage.getItem('todoList');
    if (todoStorage) {
        JSON.parse(todoStorage).forEach(todo => {
            addTodoElement(todo);
        });
    }
}

// Clear all completed todos
function clearCompleted() {
    document.querySelectorAll('li.completed').forEach(todo => todo.remove());
    saveTodoList();
}

// Filter todos
function filterTodos(filter) {
    const todoItems = document.querySelectorAll('li');
    todoItems.forEach(item => {
        switch (filter) {
            case 'all':
                item.style.display = 'flex';
                break;
            case 'active':
                if (item.classList.contains('completed')) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
                break;
            case 'completed':
                if (item.classList.contains('completed')) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
                break;
        }
    });
}

// Add event listeners for filter buttons (assuming you have these in your HTML)
document.getElementById('all').addEventListener('click', () => filterTodos('all'));
document.getElementById('active').addEventListener('click', () => filterTodos('active'));
document.getElementById('completed').addEventListener('click', () => filterTodos('completed'));
document.getElementById('clear-completed').addEventListener('click', clearCompleted);