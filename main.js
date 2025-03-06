const dateEle = document.querySelector('#todo-card .date');

const todoArray = [];
let id = 0;

const taskInput = document.querySelector('.task-input');
const addBtnEle = document.querySelector('button');
const clearListEle = document.querySelector('#clear-list');
const todoListItem = document.querySelector('.list');
const li = document.querySelector('li[data-id]')


const currDate = new Date();
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
let day = weekdays[currDate.getDay()];
let month = months[currDate.getMonth()];
let date = currDate.getDate();
dateEle.textContent = `${day}, ${month} ${date}`


// Add todo task
addBtnEle.addEventListener('click', () => {
    const task = taskInput.value;
    if (task === '') {
        return alert('Please enter a tasks')
    }
    todoArray.push(task);
    addTodoItem(task);
    taskInput.value = '';
})

function addTodoItem(todoTaskItem) {
    const todoTask = document.createElement("li");
    todoTask.classList.add('single-task');
    todoTask.setAttribute("data-id", id);
    todoTask.innerHTML = todoTaskItem;
    todoListItem.appendChild(todoTask);
    id++;
}

// Clear all todos
clearListEle.addEventListener('click', () => clearTodoList())

function clearTodoList() {
    todoArray.length = 0;
    id = 0;
    todoListItem.innerHTML = '';
}

todoListItem.addEventListener('click', (event) => {
    const dataId = event.target.getAttribute("data-id");
    console.log(dataId)
    removeTask(dataId)
})
// Remove task
function removeTask(task) {
    todoArray.splice(task, 1);
    const itemToRemove = document.querySelector(`li[data-id='${task}']`);
    itemToRemove.remove();
}