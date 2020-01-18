/* Form Handling */
let addTodoForm = document.forms[0];
addTodoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("OMG Submitted");
});
/* Initialize Custom Elements */
import { TodoItem } from './components/todo-item.js';
customElements.define("todo-item", TodoItem);
