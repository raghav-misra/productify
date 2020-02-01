/* Initialize Custom Elements */
import { TodoItem } from './components/todo-item.js';
import { TodoList } from './components/todo-list.js';
customElements.define("todo-item", TodoItem);
customElements.define("todo-list", TodoList);
/* Form Handling */
let addTodoForm = document.forms[0];
addTodoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    todoList.addItem(addTodoForm.querySelector("input").value.trim());
});
/* TodoList Node */
const todoList = document.querySelector("todo-list");
