/* Initialize Custom Elements */
import { TodoItem } from './components/todo-item.js';
import { TodoList } from './components/todo-list.js';
import { MenuBar } from './components/menu-bar.js';

customElements.define("todo-item", TodoItem);
TodoList.define();
MenuBar.define();

/* Form Handling */
let addTodoForm = document.forms[0];

addTodoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    todoList.addItem(
        (addTodoForm.querySelector("input") as HTMLInputElement).value.trim()
    );
});

/* TodoList Node */
const todoList: TodoList = document.querySelector("todo-list");

/* Choose localStorage entry */
let storageKey: string = decodeURI(location.search.replace("?", "")).trim();
if(storageKey == "") {
    const tmpKey = prompt("What is the name of your list? Or make a new list by typing in the desired name.") || "";

    if(!tmpKey) location.href = "/";
    else storageKey = tmpKey.trim().toLowerCase();
    location.search = `?${storageKey}`;
}

todoList.storageKey = "@list<>" + storageKey;
todoList.getStorage();

document.getElementById("todoName").innerText = `${storageKey}`;
document.querySelector("title").innerText = `Productify - ${storageKey}`;
